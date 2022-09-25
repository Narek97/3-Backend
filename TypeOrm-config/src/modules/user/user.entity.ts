import { AfterUpdate, BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import {AbstractEntity} from "../../comon/abstract.entity";

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity {
    @Column({ length: 30 })
    firstName: string;

    @Column({ length: 30 })
    lastName: string;

    @Column({ length: 100 })
    email: string;

    @Column({ select: false })
    password: string;

    // @Column({ type: 'enum', enum: UserRoles, default: UserRoles.USER })
    // role: UserRoles;

    ///////////////////////////////// Triggers /////////////////////////////////

    // @BeforeInsert()
    // async hashPassword() {
    //     this.password = await hash(this.password, 10);
    // }
    //
    // async comparePassword(attempt: string): Promise<boolean> {
    //     return await compare(attempt, this.password);
    // }

    // @AfterUpdate()
    // async updateUserFamilyEmail() {
    //     // await UserFamilyEntity.update({ userId: this.id }, { email: this.email });
    //     const relations = await UserFamilyEntity.find({
    //         where: { userId: this.id },
    //     });
    //     for (const relation of relations) {
    //         if (relation.email !== this.email) {
    //             relation.email = this.email;
    //             await relation.save();
    //         }
    //     }
    // }

    ///////////////////////////////// Relations /////////////////////////////////

    // @OneToMany(() => UserFamilyEntity, (userFamily) => userFamily.user)
    // userFamilies: UserFamilyEntity[];
    //
    // @OneToMany(() => FamilyEntity, (family) => family.owner)
    // families: FamilyEntity[];
    //
    // @OneToMany(() => ServiceEntity, (service) => service.user)
    // services: ServiceEntity[];
}