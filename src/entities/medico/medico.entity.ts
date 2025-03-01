import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CitaEntity } from '../cita/cita.entity';

@Entity({ name: 'medico' })
export class MedicoEntity {
    @PrimaryGeneratedColumn()
    medico_id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    medico_nombre: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    medico_apellido: string;

    @Column({ type: 'varchar', nullable: false })
    medico_especialidad: string;

    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    medico_email: string;

    @OneToMany(() => CitaEntity, cita => cita.cita_id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    citas: CitaEntity[];
}