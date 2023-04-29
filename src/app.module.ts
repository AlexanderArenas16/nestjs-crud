import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './modules/product/product.module';
import { AuthModule } from './modules/auth/auth.module';
import { CustomerModule } from './modules/customer/customer.module';

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
		ProductModule,
		CustomerModule,
		AuthModule],
	controllers: [],
	providers: [],
})
export class AppModule { }
