import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {Bookmodel, BookmodelRelations} from '../models';

export class BookmodelRepository extends DefaultCrudRepository<
  Bookmodel,
  typeof Bookmodel.prototype.id,
  BookmodelRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(Bookmodel, dataSource);
  }
}
