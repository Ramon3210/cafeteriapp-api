import {DefaultCrudRepository} from '@loopback/repository';
import {Empleado, EmpleadoRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.idEmpleado,
  EmpleadoRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(Empleado, dataSource);
  }
}
