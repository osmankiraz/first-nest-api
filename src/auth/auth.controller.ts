import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(@Body() loginBody: { username: string; password: string }) {
    return this.authService.signIn(loginBody.username, loginBody.password);
  }
}
