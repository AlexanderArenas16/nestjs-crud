import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO, SignUpDTO } from 'src/dtos/auth.dto';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @Post('sign-up')
    signUp(@Body() userSignUpDTO: SignUpDTO) {
        return this.authService.userSignUp(userSignUpDTO);
    }

    @Post('login')
    login(@Body() userLoginDTO: LoginDTO) {
        return this.authService.userLogin(userLoginDTO);
    }
}
