import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Pago extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idPago?: number;

  @property({
    type: 'number',
    required: true,
  })
  idEmpleado: number;

  @property({
    type: 'number',
    required: true,
  })
  idCliente: number;

  @property({
    type: 'number',
    required: true,
  })
  idOrden: number;

  @property({
    type: 'string',
    required: true,
  })
  totalApagar: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Pago>) {
    super(data);
  }
}

export interface PagoRelations {
  // describe navigational properties here
}

export type PagoWithRelations = Pago & PagoRelations;
