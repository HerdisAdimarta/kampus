import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DosenService } from './dosen.service';
import { DosenController } from './dosen.controller';
import { Dosen } from './entities/dosen.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Dosen]),
  JwtModule.register({
        global: true,
        secret: 'testing', //baik nya di bikin class baru
        signOptions: { expiresIn: '60s' },
      }),
    ],
  providers: [DosenService],
  controllers: [DosenController],
  
})
export class DosenModule {}
