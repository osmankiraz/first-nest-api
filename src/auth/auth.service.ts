import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(username: string, password: string) {
    const _u = await this.userService.findOneByUserName(username);
    return _u;
  }
}
