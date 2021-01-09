import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Orden} from '../models';
import {OrdenRepository} from '../repositories';

export class OrdenController {
  constructor(
    @repository(OrdenRepository)
    public ordenRepository : OrdenRepository,
  ) {}

  @post('/ordens', {
    responses: {
      '200': {
        description: 'Orden model instance',
        content: {'application/json': {schema: getModelSchemaRef(Orden)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orden, {
            title: 'NewOrden',
            exclude: ['idOrden'],
          }),
        },
      },
    })
    orden: Omit<Orden, 'idOrden'>,
  ): Promise<Orden> {
    return this.ordenRepository.create(orden);
  }

  @get('/ordens/count', {
    responses: {
      '200': {
        description: 'Orden model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Orden) where?: Where<Orden>,
  ): Promise<Count> {
    return this.ordenRepository.count(where);
  }

  @get('/ordens', {
    responses: {
      '200': {
        description: 'Array of Orden model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Orden, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Orden) filter?: Filter<Orden>,
  ): Promise<Orden[]> {
    return this.ordenRepository.find(filter);
  }

  @patch('/ordens', {
    responses: {
      '200': {
        description: 'Orden PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orden, {partial: true}),
        },
      },
    })
    orden: Orden,
    @param.where(Orden) where?: Where<Orden>,
  ): Promise<Count> {
    return this.ordenRepository.updateAll(orden, where);
  }

  @get('/ordens/{id}', {
    responses: {
      '200': {
        description: 'Orden model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Orden, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Orden, {exclude: 'where'}) filter?: FilterExcludingWhere<Orden>
  ): Promise<Orden> {
    return this.ordenRepository.findById(id, filter);
  }

  @patch('/ordens/{id}', {
    responses: {
      '204': {
        description: 'Orden PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orden, {partial: true}),
        },
      },
    })
    orden: Orden,
  ): Promise<void> {
    await this.ordenRepository.updateById(id, orden);
  }

  @put('/ordens/{id}', {
    responses: {
      '204': {
        description: 'Orden PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() orden: Orden,
  ): Promise<void> {
    await this.ordenRepository.replaceById(id, orden);
  }

  @del('/ordens/{id}', {
    responses: {
      '204': {
        description: 'Orden DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ordenRepository.deleteById(id);
  }
}
