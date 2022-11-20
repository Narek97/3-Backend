import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Report } from '../reports/report.entity';

@Entity()
export class User {
  ////uxarki en dashtery voronq chenq jnjum/  @Exclude() poxaren
  toJSON() {
    delete this.password;
    return this;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  // @Exclude()// vor es dashty get aneluch chgna,amen angam stex chgrelu hamar SerializeInterceptor enq sarqum
  password: string;

  @Column({ default: true })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  // @AfterInsert()
  // logInsert() {
  //   console.log('Inserted User width id', this.id);
  // }
  //
  // @AfterUpdate()
  // logUpdate() {
  //   console.log('Updated User width id', this.id);
  // }
  //
  // @AfterRemove()
  // logRemove() {
  //   console.log('Removed User width id', this.id);
  // }
}
