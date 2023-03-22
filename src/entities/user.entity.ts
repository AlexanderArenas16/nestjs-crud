import * as bcrypt from 'bcrypt';
import { Entity, Column, BeforeInsert } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {
	@Column()
	name: string;

    @Column({ nullable: true })
	email?: string;

	@Column({ default: false })
	password: string;

    @BeforeInsert()
    async setPassword() {
		const salt = await bcrypt.genSalt();
		this.password = await bcrypt.hash(this.password, salt);
	}
}