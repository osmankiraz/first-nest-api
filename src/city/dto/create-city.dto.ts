import { IsEmpty, IsNotEmpty, IsNumber, IsString, Max, MaxLength } from 'class-validator';

export class CreateCityDto {
  @IsEmpty()
  id: number;

  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  name: string;

  @Max(82)
  @IsNumber()
  @IsNotEmpty()
  plate: number;
}
