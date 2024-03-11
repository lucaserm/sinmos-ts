import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm';

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
						name: 'id_cargo',
						type: 'uuid',
					},
				],
			})
		);

		await queryRunner.createForeignKey(
			'Usuarios',
			new TableForeignKey({
				columnNames: ['id_cargo'],
				referencedColumnNames: ['id'],
				referencedTableName: 'Cargo',
				name: 'fk_usuario_cargo',
				onDelete: 'CASCADE',
				onUpdate: 'SET NULL',
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('Usuarios', 'fk_usuario_cargo');
		await queryRunner.dropTable('Usuarios');
	}
}
