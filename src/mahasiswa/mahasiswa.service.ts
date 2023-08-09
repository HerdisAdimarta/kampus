import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Mahasiswa } from './entities/mahasiswa.entity';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';

@Injectable()
export class MahasiswaService {
  constructor(
    @InjectRepository(Mahasiswa)
    private mahasiswaRepository: Repository<Mahasiswa>,
    private jwtService: JwtService
  ) {}

//   async signIn(email: string, pass: string): Promise<any> {
//     const user = await this.usersRepository.findOneBy({ email: email });
//     if (user?.password !== pass) {
//       throw new UnauthorizedException('Email or Password is wrong');
//       // throw new HttpException('User not found', HttpStatus.NOT_FOUND);

//     }
//     const { password, ...data } = user;
//     // TODO: Generate a JWT and return it here
//     // instead of the user object
//       const payload = { sub: data.id, firstname: data.firstName, lastname: data.lastName};
//     return {
//       access_token: await this.jwtService.signAsync(payload,),
//       data
//     };
//   }

  async create(createMahasiswaDto: CreateMahasiswaDto): Promise<Mahasiswa> {
    try {
      const mahasiswa = new Mahasiswa();
      mahasiswa.nim = createMahasiswaDto.nim;
      mahasiswa.nama = createMahasiswaDto.nama;
      mahasiswa.tahun_masuk = createMahasiswaDto.tahun_masuk;
      mahasiswa.id_fakultas = createMahasiswaDto.id_fakultas;
      mahasiswa.id_jurusan = createMahasiswaDto.id_jurusan;

      if(createMahasiswaDto){
        const mahasiswaData= await this.mahasiswaRepository.save(mahasiswa);
        return mahasiswaData
      }

    } catch (error) { 
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Mahasiswa is available',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }

  }

  findAll(): Promise<Mahasiswa[]> {
    return this.mahasiswaRepository.find();
  }

  findOne(id: number) {
    return this.mahasiswaRepository.findOneBy({ id: id });
  }

  async update(id: number, updateUserDto: UpdateMahasiswaDto): Promise<Mahasiswa> {
    await this.mahasiswaRepository.update(id, updateUserDto);
    const updatedUser = await this.mahasiswaRepository.findOneBy({ id: id});
    if(updatedUser){
      return updatedUser;
    }
    throw new HttpException('Mahasiswa not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: number) {
    const deletedUser = await this.mahasiswaRepository.delete(id);
    if (!deletedUser.affected) {
      throw new HttpException('Mahasiswa not found', HttpStatus.NOT_FOUND);
    }
  }

}
