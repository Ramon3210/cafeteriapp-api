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
import {Mesa} from '../models';
import {MesaRepository} from '../repositories';

export class MesaController {
  constructor(
    @repository(MesaRepository)
    public mesaRepository : MesaRepository,
  ) {}

  @post('/mesas', {
    responses: {
      '200': {
        description: 'Mesa model instance',
        content: {'application/json': {schema: getModelSchemaRef(Mesa)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mesa, {
            title: 'NewMesa',
            exclude: ['idMesa'],
          }),
        },
      },
    })
    mesa: Omit<Mesa, 'idMesa'>,
  ): Promise<Mesa> {
    return this.mesaRepository.create(mesa);
  }

  @get('/mesas/count', {
    responses: {
      '200': {
        description: 'Mesa model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Mesa) where?: Where<Mesa>,
  ): Promise<Count> {
    return this.mesaRepository.count(where);
  }

  @get('/mesas', {
    responses: {
      '200': {
        description: 'Array of Mesa model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Mesa, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Mesa) filter?: Filter<Mesa>,
  ): Promise<Mesa[]> {
    return this.mesaRepository.find(filter);
  }

  @patch('/mesas', {
    responses: {
      '200': {
        description: 'Mesa PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mesa, {partial: true}),
        },
      },
    })
    mesa: Mesa,
    @param.where(Mesa) where?: Where<Mesa>,
  ): Promise<Count> {
    return this.mesaRepository.updateAll(mesa, where);
  }

  @get('/mesas/{id}', {
    responses: {
      '200': {
        description: 'Mesa model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Mesa, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Mesa, {exclude: 'where'}) filter?: FilterExcludingWhere<Mesa>
  ): Promise<Mesa> {
    return this.mesaRepository.findById(id, filter);
  }

  @patch('/mesas/{id}', {
    responses: {
      '204': {
        description: 'Mesa PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mesa, {partial: true}),
        },
      },
    })
    mesa: Mesa,
  ): Promise<void> {
    await this.mesaRepository.updateById(id, mesa);
  }

  @put('/mesas/{id}', {
    responses: {
      '204': {
        description: 'Mesa PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() mesa: Mesa,
  ): Promise<void> {
    await this.mesaRepository.replaceById(id, mesa);
  }

  @del('/mesas/{id}', {
    responses: {
      '204': {
        description: 'Mesa DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.mesaRepository.deleteById(id);
  }
}
