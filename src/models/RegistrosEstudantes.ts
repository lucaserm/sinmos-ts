import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Estudante from './Estudantes';
import Registro from './Registros';

@Entity('RegistrosEstudantes')
class RegistroEstudante {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Estudante)
    estudante: Estudante;

    @ManyToOne(() => Registro)
    registro: Registro;
}

export default RegistroEstudante;
