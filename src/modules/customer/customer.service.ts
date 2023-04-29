import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerAddDto } from 'src/dtos/customer.dto';
import { CustomerEntity } from 'src/entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity) private customerRepository: Repository<CustomerEntity>
        ) {}

    async getAll(){
		return await this.customerRepository.find();
	}

	async getOne(id: string){
		return await this.customerRepository.findOne({ where: { id: id } })
	}

	async createCustomer(body: CustomerAddDto){
		const newCustomer = this.customerRepository.create(body);
		return  this.customerRepository.save(newCustomer);
	}

	async updateCustomer(id: string, body: any){
		const customer = await this.customerRepository.findOne({ where: { id: id } });
		const uploadCustomer = this.customerRepository.merge(customer, body);
		return this.customerRepository.save(uploadCustomer);																																																																																																																																																																																																																																																																																																																																																																																																																																																														
	}

	async deleteCustomer(id: string){
		const customer = await this.customerRepository.findOne({ where: { id: id } });
		this.customerRepository.remove(customer);
		return true;
	}
}
