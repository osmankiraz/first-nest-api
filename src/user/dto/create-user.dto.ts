import { IsEmpty, IsNotEmpty, Max } from 'class-validator';
export class CreateUserDto {
    @IsEmpty()
    id: number;
        
    @IsNotEmpty()
    username: string;
    
    
    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    password: string;
  
    @Max(130)
    age: number;
  
}
