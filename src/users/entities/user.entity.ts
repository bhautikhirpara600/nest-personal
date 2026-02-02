import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    firstName: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    lastName: string;

    @Column({ type: 'int', nullable: false })
    age: number;

    @Column({ type: 'varchar', length: 50, default: 'Gandhinagar', nullable: false })
    city: string;

    @Column({ type: 'varchar', length: 30, unique: true, nullable: false })
    email: string;

    @Column({ type: 'varchar', length: 100, select: false, nullable: false })
    password: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}   