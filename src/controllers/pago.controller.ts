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
import {Pago} from '../models';
import {PagoRepository} from '../repositories';

export class PagoController {
  constructor(
    @repository(PagoRepository)
    public pagoRepository : PagoRepository,
  ) {}

  @post('/pagos', {
    responses: {
      '200': {
        description: 'Pago model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pago)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pago, {
            title: 'NewPago',
            exclude: ['idPago'],
          }),
        },
      },
    })
    pago: Omit<Pago, 'idPago'>,
  ): Promise<Pago> {
    return this.pagoRepository.create(pago);
  }

  @get('/pagos/count', {
    responses: {
      '200': {
        description: 'Pago model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Pago) where?: Where<Pago>,
  ): Promise<Count> {
    return this.pagoRepository.count(where);
  }

  @get('/pagos', {
    responses: {
      '200': {
        description: 'Array of Pago model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Pago, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Pago) filter?: Filter<Pago>,
  ): Promise<Pago[]> {
    return this.pagoRepository.find(filter);
  }

  @patch('/pagos', {
    responses: {
      '200': {
        description: 'Pago PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pago, {partial: true}),
        },
      },
    })
    pago: Pago,
    @param.where(Pago) where?: Where<Pago>,
  ): Promise<Count> {
    return this.pagoRepository.updateAll(pago, where);
  }

  @get('/pagos/{id}', {
    responses: {
      '200': {
        description: 'Pago model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Pago, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Pago, {exclude: 'where'}) filter?: FilterExcludingWhere<Pago>
  ): Promise<Pago> {
    return this.pagoRepository.findById(id, filter);
  }

  @patch('/pagos/{id}', {
    responses: {
      '204': {
        description: 'Pago PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pago, {partial: true}),
        },
      },
    })
    pago: Pago,
  ): Promise<void> {
    await this.pagoRepository.updateById(id, pago);
  }

  @put('/pagos/{id}', {
    responses: {
      '204': {
        description: 'Pago PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pago: Pago,
  ): Promise<void> {
    await this.pagoRepository.replaceById(id, pago);
  }

  @del('/pagos/{id}', {
    responses: {
      '204': {
        description: 'Pago DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pagoRepository.deleteById(id);
  }
}
