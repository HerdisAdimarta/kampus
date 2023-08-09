import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dosen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nik: string;

  @Column()
  nama: string;

  @Column()
  tahun_masuk: number;
  
  @Column()
  id_jurusan: number;

  @Column()
  mata_kuliah: string;

}
