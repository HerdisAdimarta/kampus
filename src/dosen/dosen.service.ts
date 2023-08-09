import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Dosen } from './entities/dosen.entity';
import { CreateDosenDto } from './dto/create-dosen.dto';
import { UpdateDosenDto } from './dto/update-dosen.dto';

@Injectable()
export class DosenService {
  constructor(
    @InjectRepository(Dosen)
    private dosenRepository: Repository<Dosen>,
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

  async create(createDosenDto: CreateDosenDto): Promise<Dosen> {
    try {
      const dosen = new Dosen();
      dosen.nik = createDosenDto.nik;
      dosen.nama = createDosenDto.nama;
      dosen.tahun_masuk = createDosenDto.tahun_masuk;
      dosen.id_jurusan = createDosenDto.id_jurusan;
      dosen.mata_kuliah = createDosenDto.mata_kuliah;

      if(createDosenDto){
        const dosenData= await this.dosenRepository.save(dosen);
        return dosenData
      }

    } catch (error) { 
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Dosen is available',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }

  }

  findAll(): Promise<Dosen[]> {
    return this.dosenRepository.find();
  }

  findOne(id: number) {
    return this.dosenRepository.findOneBy({ id: id });
  }

  async update(id: number, updateUserDto: UpdateDosenDto): Promise<Dosen> {
    await this.dosenRepository.update(id, updateUserDto);
    const updatedUser = await this.dosenRepository.findOneBy({ id: id});
    if(updatedUser){
      return updatedUser;
    }
    throw new HttpException('Dosen not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: number) {
    const deletedUser = await this.dosenRepository.delete(id);
    if (!deletedUser.affected) {
      throw new HttpException('Dosen not found', HttpStatus.NOT_FOUND);
    }
  }

}
