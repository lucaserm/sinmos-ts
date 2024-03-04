import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm';

export class CriaPermissoesCargos1709525337206 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'PermissoesCargos',
				columns: [
					{ name: 'id_cargo', type: 'uuid' },
					{ name: 'id_permissao', type: 'uuid' },
				],
			})
		);

		await queryRunner.createForeignKey(
			'PermissoesCargos',
			new TableForeignKey({
				columnNames: ['id_permissao'],
				referencedColumnNames: ['id'],
				referencedTableName: 'Permissoes',
				name: 'fk_permissoes_cargos',
				onDelete: 'CASCADE',
				onUpdate: 'SET NULL',
			})
		);

		await queryRunner.createForeignKey(
			'PermissoesCargos',
			new TableForeignKey({
				columnNames: ['id_cargo'],
				referencedColumnNames: ['id'],
				referencedTableName: 'Cargos',
				name: 'fk_cargos_permissoes',
				onDelete: 'CASCADE',
				onUpdate: 'SET NULL',
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'PermissoesCargos',
			'fk_cargos_permissoes'
		);
		await queryRunner.dropForeignKey(
			'PermissoesCargos',
			'fk_permissoes_cargos'
		);
		await queryRunner.dropTable('PermissoesCargos');
	}
}
