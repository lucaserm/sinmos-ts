import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Ocorrencias')
class Ocorrencia {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao_ocorrencia: string;
}

export default Ocorrencia;
