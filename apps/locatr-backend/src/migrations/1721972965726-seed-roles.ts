import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedRoles1721972965726 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "role" ("roleID", "name", "description", "createdAt", "createdBy", "updatedAt", "updatedBy")
      VALUES
      (uuid_generate_v4(), 'owner', 'Owner role', NOW(), 'system', NOW(), 'system'),
      (uuid_generate_v4(), 'user', 'User role', NOW(), 'system', NOW(), 'system'),
      (uuid_generate_v4(), 'admin', 'Admin role', NOW(), 'system', NOW(), 'system');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "role" WHERE "name" IN ('owner', 'user', 'admin');
    `);
  }
}
