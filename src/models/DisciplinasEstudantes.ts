import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Disciplina from './Disciplinas';
import Estudante from './Estudantes';

@Entity('DisciplinasEstudantes')
class DisciplinaEstudante {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Disciplina)
    disciplina: Disciplina;

    @ManyToOne(() => Estudante)
    estudante: Estudante;
}

export default DisciplinaEstudante;
