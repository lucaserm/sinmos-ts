import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Curso from './Cursos';

@Entity('Disciplinas')
class Disciplina {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Curso)
    curso: Curso;

    @Column()
    nome_disciplina: string;

    @Column()
    semestre: number;

    @Column()
    turma: string;
}

export default Disciplina;
