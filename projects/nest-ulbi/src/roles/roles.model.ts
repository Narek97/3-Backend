import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';
import { UserRoles } from './user-role.model';

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  //Swagger doc
  @ApiProperty({ example: '1', description: 'uniq ID' })
  //-----------------------
  @Column({
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  //Swagger doc
  @ApiProperty({ example: 'ADMIN', description: 'user role' })
  //-----------------------
  @Column({
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  //Swagger doc
  @ApiProperty({ example: 'administrator', description: 'role description' })
  //-----------------------
  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  description: string;

  //tables connecting many to many
  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
