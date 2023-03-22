import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDTO } from 'src/dtos/auth.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    async userSignUp(signUpDTO: SignUpDTO) {
        if (signUpDTO.password !== signUpDTO.confirmPassword) {
            throw new NotAcceptableException('Passwords do not match');
        }
        const user = await this.userRepository.create({...signUpDTO});
        return await this.userRepository.save(user);
    }
}
