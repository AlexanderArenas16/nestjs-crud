import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductEntity {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	amount: number;
}