import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: 'USER' })
@Unique(['userEmail'])
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'USER_ID' })
    id: number;

    @Column({ name: 'USER_EMAIL' })
    userEmail: string;

    @Column({ name: 'FIRST_NAME' })
    firstName: string;

    @Column({ name: 'LAST_NAME' })
    lastName: string;

    @Column({ name: 'PASSWORD' })
    password: string;

    @Column({ name: 'USER_ROLE_ID' })
    userRoldId: number;
}
