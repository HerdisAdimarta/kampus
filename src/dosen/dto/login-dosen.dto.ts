import { IsEmail, IsNotEmpty, isNotEmpty } from 'class-validator';


export class LoginDosenDto {
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    password: string;  
}
