import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FakultasService } from './fakultas.service';
import { FakultasController } from './fakultas.controller';
import { Fakultas } from './entities/fakultas.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Fakultas]),
  JwtModule.register({
        global: true,
        secret: 'testing', //baik nya di bikin class baru
        signOptions: { expiresIn: '60s' },
      }),
    ],
  providers: [FakultasService],
  controllers: [FakultasController],
  
})
export class FakultasModule {}
