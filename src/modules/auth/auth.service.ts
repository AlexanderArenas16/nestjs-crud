import * as bcrypt from 'bcrypt';
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDTO, SignUpDTO } from 'src/dtos/auth.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UnauthorizedException } from '@nestjs/common/exceptions';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        // private jwtService: JwtService
    ) {}

    async userSignUp(signUpDTO: SignUpDTO) {
        if (signUpDTO.password !== signUpDTO.confirmPassword) {
            throw new NotAcceptableException('Passwords do not match');
        }
        const user = await this.userRepository.create({...signUpDTO});
        return await this.userRepository.save(user);
    }

    async userLogin(loginDTO: LoginDTO) {
        const { username, password} = loginDTO;
        const user = await this.userRepository.findOneBy({ name: username });
        if (user && (await this.comparePassword(password, user.password))) {
            const { updateAt, createAt, password, ...userInfo} = user;
            return userInfo;
        } else {
            throw new UnauthorizedException('Please check your credentials');
        }
    }

    async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}
