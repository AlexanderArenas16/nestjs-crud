import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TestEntity {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;

	@Column({ default: false })
	completed: boolean;
}