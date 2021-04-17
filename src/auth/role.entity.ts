import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'USER_ROLE' })
export class RoleEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'ID' })
    id: number;

    @Column({ name: 'ROLE' })
    userRole: string;
}
