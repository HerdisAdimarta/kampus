import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MahasiswaService } from './mahasiswa.service';
import { MahasiswaController } from './mahasiswa.controller';
import { Mahasiswa } from './entities/mahasiswa.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Mahasiswa]),
  JwtModule.register({
        global: true,
        secret: 'testing', //baik nya di bikin class baru
        signOptions: { expiresIn: '60s' },
      }),
    ],
  providers: [MahasiswaService],
  controllers: [MahasiswaController],
  
})
export class MahasiswaModule {}
