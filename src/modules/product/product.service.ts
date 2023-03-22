import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>
    ) {}

    async getAll(){
		return await this.productRepository.find();
	}

	async getOne(id: string){
		return await this.productRepository.findOne({ where: { id: id } })
	}

	async createProduct(body: any){
		const newTest = this.productRepository.create(body);
		return  this.productRepository.save(newTest);
	}

	async updateProduct(id: string, body: any){
		const test = await this.productRepository.findOne({ where: { id: id } });
		const uploadTest = this.productRepository.merge(test, body);
		return this.productRepository.save(uploadTest);																																																																																																																																																																																																																																																																																																																																																																																																																																																														
	}

	async deleteProduct(id: string){
		const test = await this.productRepository.findOne({ where: { id } });
        if(!test) throw new NotFoundException();
		this.productRepository.remove(test);
		return test;
	}
}
