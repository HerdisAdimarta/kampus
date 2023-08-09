import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fakultas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_jurusan: number;

  @Column()
  nama_fakultas: string;

}
