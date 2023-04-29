import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class PersonEntity extends BaseEntity {
	@Column()
	name: string;

	@Column()
	lastName: string;

	@Column()
	personalId: string;

	@Column({ nullable: true })
	cellphone?: string;

	@Column({ nullable: true })
	address?: string;

	@Column({ nullable: true })
	email?: string;

}