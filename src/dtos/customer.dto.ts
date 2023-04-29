export class CustomerDto {
	name		: string;
	lastName	: string;
	personalId	: string;
	cellphone	: string;
	address		: string;
	email		: string;
	discount	: number;
}

export class CustomerAddDto {
	name		: string;
	lastName	: string;
	personalId	: string;
	cellphone	: string;
	address?	: string;
	email		: string;
	discount?	: number;
}

export class CustomerUpdateDto {
	name?		: string;
	lastName?	: string;
	personalId?	: string;
	cellphone?	: string;
	address?	: string;
	email?		: string;
	discount?	: number;
}