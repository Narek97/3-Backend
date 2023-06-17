// import {
//   Column,
//   ForeignKey,
//   Model,
//   Table,
// } from 'sequelize-typescript';
// import { DataTypes } from 'sequelize';
// import { User } from '../users/users.model';
// import { Role } from '../roles/roles.model';
//
// interface UserRoleCreationAttrs {
//   value: string;
//   description: string;
// }
//
// @Table({ tableName: 'roles', createdAt: false, updatedAt: false })
// export class UserRoles extends Model<UserRoles, UserRoleCreationAttrs> {
//   @Column({
//     type: DataTypes.INTEGER,
//     unique: true,
//     autoIncrement: true,
//     primaryKey: true,
//   })
//   id: number;
//
//   @ForeignKey(() => Role)
//   @Column({
//     type: DataTypes.INTEGER,
//     unique: true,
//   })
//   roleId: number;
//
//   @ForeignKey(() => User)
//   @Column({
//     type: DataTypes.INTEGER,
//     unique: true,
//   })
//   userId: number;
// }
