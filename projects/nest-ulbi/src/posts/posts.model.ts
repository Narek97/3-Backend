import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from '../users/users.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @Column({
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  content: string;

  @Column({
    type: DataTypes.STRING,
  })
  image: string;

  //tables connecting one to many
  //useri idn tpelu hamar
  @ForeignKey(() => User)
  @Column({
    type: DataTypes.INTEGER,
  })
  userId: number;

  //tables connecting one to many
  @BelongsTo(() => User)
  author: User;
}
