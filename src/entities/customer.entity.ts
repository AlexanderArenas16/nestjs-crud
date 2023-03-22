import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Customer extends BaseEntity {
	@Column()
	name: string;

	@Column()
	lastName: string;

	@Column()
	personalId: string;

	@Column()
	cellphone: string;

	@Column()
	address: string;

}