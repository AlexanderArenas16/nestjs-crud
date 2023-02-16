import { Injectable } from '@nestjs/common';
import { TestEntity } from '../entities/test.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestDto } from '../../../dtos/test.dto';
import { classToObject, mapAddressToDTO } from 'src/utilities/mapper';

@Injectable()
export class TestService {

	constructor(
		@InjectRepository(TestEntity) private testRepository: Repository<TestEntity>
	){}

	async getAll(){
		return await this.testRepository.find();
	}

	async getOne(id: string){
		return await this.testRepository.findOne({ where: { id: id } })
	}

	async createTest(body: any){
		const newTest = this.testRepository.create(body);
		return  this.testRepository.save(newTest);
	}

	async updateTest(id: string, body: any){
		const test = await this.testRepository.findOne({ where: { id: id } });
		const uploadTest = this.testRepository.merge(test, body);
		return this.testRepository.save(uploadTest);																																																																																																																																																																																																																																																																																																																																																																																																																																																														
	}

	async deleteTest(id: string){
		const test = await this.testRepository.findOne({ where: { id: id } });
		this.testRepository.remove(test);
		return true;
	}

	async testDto(id: string){
		const test = await this.testRepository.findOne({ where: { id: id } });
		const testDTO = new TestDto();
		const testo = mapAddressToDTO(test, testDTO);
		const testo2 = classToObject(test);
		return {testo, test};
	}
}
