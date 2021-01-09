import {DefaultCrudRepository} from '@loopback/repository';
import {Platillo, PlatilloRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlatilloRepository extends DefaultCrudRepository<
  Platillo,
  typeof Platillo.prototype.idPlatillo,
  PlatilloRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(Platillo, dataSource);
  }
}
