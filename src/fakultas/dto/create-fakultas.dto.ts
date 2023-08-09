import { IsEmail, IsNotEmpty, isNotEmpty } from 'class-validator';


export class CreateFakultasDto {
    @IsNotEmpty()
    id_jurusan: number;

    @IsNotEmpty()
    nama_fakultas: string;
  
}
