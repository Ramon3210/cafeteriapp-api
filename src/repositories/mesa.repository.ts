import {DefaultCrudRepository} from '@loopback/repository';
import {Mesa, MesaRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MesaRepository extends DefaultCrudRepository<
  Mesa,
  typeof Mesa.prototype.idMesa,
  MesaRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(Mesa, dataSource);
  }
}
