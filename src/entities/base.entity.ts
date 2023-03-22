import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@CreateDateColumn({
        type: 'timestamp with time zone',
        default: 'now()',
        update: false,
        nullable: false
    })
	createAt!: Date;

    @UpdateDateColumn({
        type: 'timestamp with time zone',
        default: 'now()',
        onUpdate: 'now()',
        nullable: false
    })
	updateAt!: Date;
}