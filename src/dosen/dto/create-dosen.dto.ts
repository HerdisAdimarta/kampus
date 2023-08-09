import { IsEmail, IsNotEmpty, isNotEmpty } from 'class-validator';


export class CreateDosenDto {
    @IsNotEmpty()
    nik: string;

    @IsNotEmpty()
    nama: string;

    @IsNotEmpty()
    tahun_masuk: number;

    @IsNotEmpty()
    id_jurusan: number;  

    @IsNotEmpty()
    mata_kuliah: string;
  
}
