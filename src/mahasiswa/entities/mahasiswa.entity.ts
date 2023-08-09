import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mahasiswa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nim: string;

  @Column()
  nama: string;

  @Column()
  tahun_masuk: number;

  @Column()
  id_fakultas: number;

  @Column()
  id_jurusan: number;
}
