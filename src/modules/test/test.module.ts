import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from './test.controller';
import { TestEntity } from '../../entities/test.entity';
import { TestService } from './test.service';

@Module({
	imports: [TypeOrmModule.forFeature([TestEntity])],
	providers: [TestService],
	controllers: [TestController],
})
export class TestModule {}
