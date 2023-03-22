import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDTO } from 'src/dtos/auth.dto';
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
}
