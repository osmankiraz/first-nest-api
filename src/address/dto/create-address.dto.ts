import { IsNotEmpty } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateAddressDto {
  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  user:User;
}
