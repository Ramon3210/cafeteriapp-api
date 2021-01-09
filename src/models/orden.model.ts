import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Orden extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idOrden?: number;

  @property({
    type: 'string',
    required: true,
  })
  fechaOrden: string;

  @property({
    type: 'string',
    required: true,
  })
  horaOrden: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Orden>) {
    super(data);
  }
}

export interface OrdenRelations {
  // describe navigational properties here
}

export type OrdenWithRelations = Orden & OrdenRelations;
