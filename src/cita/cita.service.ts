import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CitaEntity } from 'src/entities/cita/cita.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CitaService {
    constructor(
        @InjectRepository(CitaEntity)
        private readonly _citaRepository: Repository<CitaEntity>,
    ){}

    // crear cita
    async crearCita(cita: CitaEntity): Promise<MessageDto> {
        const nuevoCita = await this._citaRepository.create(cita);

        await this._citaRepository.save(nuevoCita);
        return new MessageDto('Cita creada correctamente');
    }

    // obtener cita por su id
    async obtenerCita(id: number): Promise<CitaEntity> {
        const citaEncontrada = await this._citaRepository.findOne({ where: { cita_id: id}});

        if (!citaEncontrada) {
            throw new NotFoundException('La cita no existe');
        }

        return citaEncontrada;
    }
}
