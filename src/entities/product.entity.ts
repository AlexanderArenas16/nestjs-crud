import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Product extends BaseEntity{
	@Column()
	name: string;

	@Column()
	code: string;

	@Column()
	basePrice: number;

	@Column()
	utility: number;

	@Column()
	amount: number;
}