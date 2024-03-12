import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dtos/SignIn.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async generateJwtToken(
    payload: SignInDto,
  ): Promise<{ access_token: string }> {
    try {
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      console.error('jwt error', error);
    }
  }
}
