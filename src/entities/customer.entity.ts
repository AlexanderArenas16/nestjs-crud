import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CustomerEntity {
	@PrimaryGeneratedColumn()
	id: string;

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