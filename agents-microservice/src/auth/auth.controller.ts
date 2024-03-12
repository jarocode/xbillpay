import { Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/SignIn.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  signIn(@Body() signInDto: SignInDto) {
    console.log('signInData', signInDto);
    // return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
