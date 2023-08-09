import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { Mahasiswa } from './mahasiswa/entities/mahasiswa.entity';
import { Dosen } from './dosen/entities/dosen.entity';
import { DosenModule } from './dosen/dosen.module';
import { Fakultas } from './fakultas/entities/fakultas.entity';
import { FakultasModule } from './fakultas/fakultas.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'kampus',
      entities: [Mahasiswa, Dosen, Fakultas],
      synchronize: true,
    }),
    MahasiswaModule,
    DosenModule,
    FakultasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
