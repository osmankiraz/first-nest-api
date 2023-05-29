import { JwtModuleOptions } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';

export const jwtOptions: JwtModuleOptions = {
  signOptions: { expiresIn: '10000s' },
  secret: jwtConstants.secret,
  global: true,
};
