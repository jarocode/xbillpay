import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  //   constructor(private usersService: UsersService) {}
  //   async signIn(username: string, pass: string): Promise<any> {
  //     const user = await this.usersService.findOne(username);
  //     if (user?.password !== pass) {
  //       throw new UnauthorizedException();
  //     }
  //     // TODO: Generate a JWT and return it here
  //     // instead of the user object
  //     return null;
  //   }
}