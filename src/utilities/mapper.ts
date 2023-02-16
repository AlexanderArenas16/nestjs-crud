import { TestDto } from "src/dtos/test.dto";
import { TestEntity } from "src/modules/test/entities/test.entity";

export function mapAddressToDTO(entity: TestEntity, dto: TestDto) {
    const objectEntity = Object.assign({}, entity);
    const objectDto = Object.assign({}, dto);
    const hola = Object.keys(objectEntity)
    return hola.reduce((result: Object, key:string) => {
        result[key] = objectEntity[key]
        return result;
    }, {});
}

export function classToObject(entity: TestEntity) {
    const test = Object.assign({}, entity);
    return test;
}