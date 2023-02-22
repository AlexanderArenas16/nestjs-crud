import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('api/product')
export class ProductController {

    constructor(private productService: ProductService) {}

    @Get()
	getAlL(){
		return this.productService.getAll();
	}

	@Get(':productId')
	getOne(@Param('productId') id: string){
        console.log(id)
		return this.productService.getOne(id);
	}

	@Post()
	createProduct(@Body() body: any){
		return this.productService.createProduct(body);
	}

	@Patch(':productId')
	updateProduct(@Param('productId') id: string, @Body() body: any ){
		return this.productService.updateProduct(id, body);
	}

	@Delete(':productId')
	deleteProduct(@Param('productId') id: string){
		return this.productService.deleteProduct(id);
	}
}
