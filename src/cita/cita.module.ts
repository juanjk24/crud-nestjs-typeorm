import { Module } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CitaController } from './cita.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitaEntity } from 'src/entities/cita/cita.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CitaEntity])],
  providers: [CitaService],
  controllers: [CitaController]
})
export class CitaModule {}
