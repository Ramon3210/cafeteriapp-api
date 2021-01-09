import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Mesa extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idMesa?: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidadSillas: number;

  @property({
    type: 'string',
    required: true,
  })
  ubicacionSilla: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Mesa>) {
    super(data);
  }
}

export interface MesaRelations {
  // describe navigational properties here
}

export type MesaWithRelations = Mesa & MesaRelations;
