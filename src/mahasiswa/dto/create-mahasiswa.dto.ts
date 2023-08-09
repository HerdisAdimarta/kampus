import { IsEmail, IsNotEmpty, isNotEmpty } from 'class-validator';


export class CreateMahasiswaDto {
    @IsNotEmpty()
    nim: string;

    @IsNotEmpty()
    nama: string;

    @IsNotEmpty()
    tahun_masuk: number;

    @IsNotEmpty()
    id_fakultas: number;
  
    @IsNotEmpty()
    id_jurusan: number;  

}
