import { Entity, Column } from 'typeorm';
import { PersonEntity } from './person.entity';

@Entity()
export class CustomerEntity extends PersonEntity {
	@Column({ nullable: true })
	discount?: number;
}