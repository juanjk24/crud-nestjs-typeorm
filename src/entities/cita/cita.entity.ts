import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PacienteEntity } from '../paciente/paciente.entity';
import { MedicoEntity } from '../medico/medico.entity';

@Entity({ name: 'cita' })
export class CitaEntity {
    @PrimaryGeneratedColumn()
    cita_id: number;

    @Column({ type: 'timestamp', nullable: false })
    cita_fecha_hora: Date;

    @Column({ type: 'varchar', length: 255, nullable: false })
    cita_motivo: string;

    @ManyToOne(() => PacienteEntity, paciente => paciente.paciente_id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    paciente: PacienteEntity;

    @ManyToOne(() => MedicoEntity, medico => medico.medico_id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    medico: MedicoEntity;
}