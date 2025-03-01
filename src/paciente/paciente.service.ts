import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { PacienteEntity } from 'src/entities/paciente/paciente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PacienteService {
    constructor(
        @InjectRepository(PacienteEntity)
        private readonly _pacienteRepository: Repository<PacienteEntity>,
    ){}

    // crear paciente
    async crearPaciente(paciente: PacienteEntity): Promise<MessageDto> {
        const nuevoPaciente = await this._pacienteRepository.create(paciente);

        await this._pacienteRepository.save(nuevoPaciente);
        return new MessageDto('Paciente creado correctamente');
    }

    // obtener todos los pacientes
    async obtenerPacientes(): Promise<PacienteEntity[]> {
        return await this._pacienteRepository.createQueryBuilder('paciente')
        .getMany();
    }

    // eliminar paciente
    async eliminarPaciente(id: number): Promise<MessageDto> {
        const pacienteEncontrado = await this._pacienteRepository.findOne({ where: { paciente_id: id}});

        if (!pacienteEncontrado) {
            throw new NotFoundException('El paciente no existe');
        }

        await this._pacienteRepository.delete(id);
        return new MessageDto('Paciente eliminado correctamente');
    }
}
