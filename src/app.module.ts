import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './modules/test/test.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: 'postgres',
			database: 'accountant',
			entities: ['dist/**/*.entity{.ts,.js}'],
			synchronize: true,
			autoLoadEntities: true,
			retryDelay: 3000,
			retryAttempts: 10,
		}),
		TestModule],
	controllers: [],
	providers: [],
})
export class AppModule { }
