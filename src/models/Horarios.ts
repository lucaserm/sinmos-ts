import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Disciplina from './Disciplinas';

@Entity('Horarios')
class Horario {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Disciplina)
    disciplina: Disciplina;

    @Column()
    periodo_horarios: string;

    @Column()
    dia_semana: string;

    @Column()
    tempo_inicio: number;

    @Column()
    tempo_fim: number;
}

export default Horario;
