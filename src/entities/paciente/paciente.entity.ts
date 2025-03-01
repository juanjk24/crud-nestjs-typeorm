import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CitaEntity } from '../cita/cita.entity';

@Entity({ name: 'paciente' })
export class PacienteEntity {
    @PrimaryGeneratedColumn()
    paciente_id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    paciente_nombre: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    paciente_apellido: string;

    @Column({ type: 'date', nullable: false })
    paciente_fecha_nacimiento: Date;

    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    paciente_email: string;

    @OneToMany(() => CitaEntity, cita => cita.cita_id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    citas: CitaEntity[];
}