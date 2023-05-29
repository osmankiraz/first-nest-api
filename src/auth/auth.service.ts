import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string) {
    const _u = await this.userService.findOneByUserName(username);
    if(_u.password !== password){
      throw new UnauthorizedException()
    }
    const payload = { userId: _u.id, username: _u.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
