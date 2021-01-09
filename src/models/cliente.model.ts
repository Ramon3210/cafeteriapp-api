import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idCliente?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreCliente: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaNacimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoCliente: string;

  @property({
    type: 'number',
    required: true,
  })
  numAcompa: number;

  @property({
    type: 'number',
    required: true,
  })
  numMenores: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
