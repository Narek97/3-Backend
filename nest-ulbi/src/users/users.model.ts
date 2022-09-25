import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-role.model';
import { Post } from '../posts/posts.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
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
  @ApiProperty({ example: 'user@gmail.com', description: 'user email' })
  //-----------------------
  @Column({
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  //Swagger doc
  @ApiProperty({ example: '123456', description: 'user password' })
  //-----------------------
  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  password: string;

  //Swagger doc
  @ApiProperty({ example: 'true', description: 'banned or no' })
  //-----------------------
  @Column({
    type: DataTypes.STRING,
    defaultValue: false,
  })
  banned: boolean;

  //Swagger doc
  @ApiProperty({ example: 'span', description: 'banned reason' })
  //-----------------------
  @Column({
    type: DataTypes.STRING,
    allowNull: true,
  })
  bannedReason: string;

  //tables connecting many to many
  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  //tables connecting one to many
  //HasMany qani  vor mi user kara unena shat poster
  @HasMany(() => Post)
  author: Post[];
}
