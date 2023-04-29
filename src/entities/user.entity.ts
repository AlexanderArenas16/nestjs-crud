import * as bcrypt from 'bcrypt';
import { Entity, Column, BeforeInsert } from 'typeorm';
import { PersonEntity } from './person.entity';

@Entity()
export class User extends PersonEntity {

	@Column({ default: false })
	password: string;

    @BeforeInsert()
    async setPassword() {
		const salt = await bcrypt.genSalt();
		this.password = await bcrypt.hash(this.password, salt);
	}
}