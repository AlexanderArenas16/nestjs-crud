import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TestService } from '../services/test.service';

@Controller('api/test')
export class TestController {

	constructor(private testService: TestService) {}

	@Get()
	getAlL(){
		return this.testService.getAll();
	}

	@Get(':testId')
	getOne(@Param('testId') id: string){
		return this.testService.getOne(id);
	}

	@Post()
	createTest(@Body() body: any){
		return this.testService.createTest(body);
	}

	@Patch(':testId')
	updateTest(@Param('testId') id: string, @Body() body: any ){
		return this.testService.updateTest(id, body);
	}

	@Delete(':testId')
	deleteTest(@Param(':testId') id: string){
		return this.testService.deleteTest(id);
	}
}
