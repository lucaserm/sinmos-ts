import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Cursos')
class Curso {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome_curso: string;

    @Column()
    periodo_curso: string;
}

export default Curso;
