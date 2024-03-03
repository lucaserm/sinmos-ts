import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CriaUsuarios1709423600168 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'Usuarios',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'nome',
						type: 'varchar',
					},
					{
						name: 'senha',
						type: 'varchar',
					},
					{
						name: 'codigo',
						type: 'varchar',
					},
					{
						name: 'cargo',
						type: 'varchar',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('Usuarios');
	}
}
