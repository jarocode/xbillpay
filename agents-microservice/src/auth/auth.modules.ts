import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { jwtConstants } from './constant';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [],
  exports: [AuthService],
})
export class AuthModule {}
