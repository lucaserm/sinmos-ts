import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Usuario from './Usuario';
import Ocorrencia from './Ocorrencias';
import Estudante from './Estudantes';

@Entity('OcorrenciasEstudantes')
class OcorrenciaEstudante {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Usuario)
    usuario: Usuario;

    @ManyToOne(() => Ocorrencia)
    ocorrencia: Ocorrencia;

    @ManyToOne(() => Estudante)
    estudante: Estudante;

    @Column()
    data_ocorrencia: Date;

    @Column()
    nome_usuario_relacionado: string;

    @Column()
    status: string;
}

export default OcorrenciaEstudante;
 