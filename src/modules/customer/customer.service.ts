import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer) private customerRepository: Repository<Customer>
        ) {}

    async getAll(){
		return await this.customerRepository.find();
	}

	async getOne(id: string){
		return await this.customerRepository.findOne({ where: { id: id } })
	}

	async createCustomer(body: any){
		const newTest = this.customerRepository.create(body);
		return  this.customerRepository.save(newTest);
	}

	async updateCustomer(id: string, body: any){
		const test = await this.customerRepository.findOne({ where: { id: id } });
		const uploadTest = this.customerRepository.merge(test, body);
		return this.customerRepository.save(uploadTest);																																																																																																																																																																																																																																																																																																																																																																																																																																																														
	}

	async deleteCustomer(id: string){
		const test = await this.customerRepository.findOne({ where: { id: id } });
		this.customerRepository.remove(test);
		return true;
	}
}
