import {DefaultCrudRepository} from '@loopback/repository';
import {Pago, PagoRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PagoRepository extends DefaultCrudRepository<
  Pago,
  typeof Pago.prototype.idPago,
  PagoRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(Pago, dataSource);
  }
}
