import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from './controllers/test.controller';
import { TestEntity } from './entities/test.entity';
import { TestService } from './services/test.service';

@Module({
	imports: [TypeOrmModule.forFeature([TestEntity])],
	providers: [TestService],
	controllers: [TestController],
})
export class TestModule {}
