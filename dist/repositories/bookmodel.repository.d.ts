import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDsDataSource } from '../datasources';
import { Bookmodel, BookmodelRelations } from '../models';
export declare class BookmodelRepository extends DefaultCrudRepository<Bookmodel, typeof Bookmodel.prototype.id, BookmodelRelations> {
    constructor(dataSource: MongoDsDataSource);
}
