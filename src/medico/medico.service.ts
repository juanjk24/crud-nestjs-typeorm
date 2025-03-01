import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { MedicoEntity } from 'src/entities/medico/medico.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MedicoService {
    constructor(
        @InjectRepository(MedicoEntity)
        private readonly _medicoRepository: Repository<MedicoEntity>,
    ){}

    // crear medico
    async crearMedico(medico: MedicoEntity): Promise<MessageDto> {
        const nuevoMedico = await this._medicoRepository.create(medico);

        await this._medicoRepository.save(nuevoMedico);
        return new MessageDto('Medico creado correctamente');
    }

    // obtener todos los medicos
    async obtenerMedicos(): Promise<MedicoEntity[]> {
        return await this._medicoRepository.createQueryBuilder('medico')
        .getMany();
    }

    // actualizar medico
    async actualizarMedico(id: number, medico: MedicoEntity): Promise<MessageDto> {
        const medicoEncontrado = await this._medicoRepository.findOne({ where: { medico_id: id}});

        if (!medicoEncontrado) {
            throw new NotFoundException('El medico no existe');
        }

        await this._medicoRepository.update(id, medico);
        return new MessageDto('Medico actualizado correctamente');
    }

    // eliminar medico
    async eliminarMedico(id: number): Promise<MessageDto> {
        const medicoEncontrado = await this._medicoRepository.findOne({ where: { medico_id: id}});

        if (!medicoEncontrado) {
            throw new NotFoundException('El medico no existe');
        }

        await this._medicoRepository.delete(id);
        return new MessageDto('Medico eliminado correctamente');
    }
}
