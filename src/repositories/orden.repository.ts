import {DefaultCrudRepository} from '@loopback/repository';
import {Orden, OrdenRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdenRepository extends DefaultCrudRepository<
  Orden,
  typeof Orden.prototype.idOrden,
  OrdenRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(Orden, dataSource);
  }
}
