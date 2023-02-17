import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('api/customer')
export class CustomerController {
    constructor(private customerService: CustomerService) {}

    @Get()
	getAlL(){
		return this.customerService.getAll();
	}

	@Get(':customerId')
	getOne(@Param('customerId') id: string){
		return this.customerService.getOne(id);
	}

	@Post()
	createCustomer(@Body() body: any){
		return this.customerService.createCustomer(body);
	}

	@Patch(':customerId')
	updateCustomer(@Param('customerId') id: string, @Body() body: any ){
		return this.customerService.updateCustomer(id, body);
	}

	@Delete(':customerId')
	deleteCustomer(@Param(':customerId') id: string){
		return this.customerService.deleteCustomer(id);
	}
}
