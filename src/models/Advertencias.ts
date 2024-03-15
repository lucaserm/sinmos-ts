import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import OcorrenciaEstudante from './OcorrenciasEstudantes';

@Entity('Advertencias')
class Advertencia {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => OcorrenciaEstudante)
    ocorrenciaEstudante: OcorrenciaEstudante;

    @Column()
    relatorio_advertencia: string;

    @Column()
    data_resolucao: Date;
}

export default Advertencia;
