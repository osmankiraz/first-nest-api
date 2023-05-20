import { IsEmpty, IsNotEmpty } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreatePhotoDto {
  @IsEmpty()
  id: number;

  @IsNotEmpty()
  byte: number;

  @IsNotEmpty()
  width: number;
  
  @IsNotEmpty()
  height: number;

  @IsNotEmpty()
  user: User;
}
