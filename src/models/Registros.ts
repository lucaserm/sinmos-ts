import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Registros')
class Registro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dia_hora_saida: Date;

    @Column()
    descricao: string;

    @Column()
    dia_liberacao: string;
}

export default Registro;
