import { MigrationInterface, QueryRunner } from 'typeorm';

export class removeRole1668939591705 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', 'role');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
