import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Fakultas } from './entities/fakultas.entity';
import { CreateFakultasDto } from './dto/create-fakultas.dto';
import { UpdateFakultasDto } from './dto/update-fakultas.dto';

@Injectable()
export class FakultasService {
  constructor(
    @InjectRepository(Fakultas)
    private fakultasRepository: Repository<Fakultas>,
    private jwtService: JwtService
  ) {}

  async create(createFakultasDto: CreateFakultasDto): Promise<Fakultas> {
    try {
      const fakultas = new Fakultas();
      fakultas.id_jurusan = createFakultasDto.id_jurusan;
      fakultas.nama_fakultas = createFakultasDto.nama_fakultas;

      if(createFakultasDto){
        const fakultasData= await this.fakultasRepository.save(fakultas);
        return fakultasData
      }

    } catch (error) { 
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Fakultas is available',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }

  }

  findAll(): Promise<Fakultas[]> {
    return this.fakultasRepository.find();
  }

  findOne(id: number) {
    return this.fakultasRepository.findOneBy({ id: id });
  }

  async update(id: number, updateUserDto: UpdateFakultasDto): Promise<Fakultas> {
    await this.fakultasRepository.update(id, updateUserDto);
    const updatedFakultas = await this.fakultasRepository.findOneBy({ id: id});
    if(updatedFakultas){
      return updatedFakultas;
    }
    throw new HttpException('Fakultas not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: number) {
    const deletedUser = await this.fakultasRepository.delete(id);
    if (!deletedUser.affected) {
      throw new HttpException('Fakultas not found', HttpStatus.NOT_FOUND);
    }
  }

}
