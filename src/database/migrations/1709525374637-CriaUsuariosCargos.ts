import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm';

export class CriaUsuariosCargos1709525374637 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'UsuariosCargos',
				columns: [
					{ name: 'id_cargo', type: 'uuid' },
					{ name: 'id_usuario', type: 'uuid' },
				],
			})
		);

		await queryRunner.createForeignKey(
			'UsuariosCargos',
			new TableForeignKey({
				columnNames: ['id_usuario'],
				referencedColumnNames: ['id'],
				referencedTableName: 'Usuarios',
				name: 'fk_usuarios_cargos',
				onDelete: 'CASCADE',
				onUpdate: 'SET NULL',
			})
		);

		await queryRunner.createForeignKey(
			'UsuariosCargos',
			new TableForeignKey({
				columnNames: ['id_cargo'],
				referencedColumnNames: ['id'],
				referencedTableName: 'Cargos',
				name: 'fk_cargos_usuarios',
				onDelete: 'CASCADE',
				onUpdate: 'SET NULL',
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('UsuariosCargos', 'fk_cargos_usuarios');
		await queryRunner.dropForeignKey('UsuariosCargos', 'fk_usuarios_cargos');
		await queryRunner.dropTable('UsuariosCargos');
	}
}
