import { IsEmail, IsNotEmpty, isNotEmpty } from 'class-validator';


export class LoginMahasiswaDto {
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    password: string;  
}
