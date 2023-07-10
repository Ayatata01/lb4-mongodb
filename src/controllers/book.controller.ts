import {inject} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  Request,
  requestBody,
  response,
  RestBindings,
} from '@loopback/rest';
import {verifyToken} from '../middlewares/jwt.middleware';
import {Bookmodel} from '../models';
import {BookmodelRepository} from '../repositories';

export class BookController {
  constructor(
    @repository(BookmodelRepository)
    public bookmodelRepository: BookmodelRepository,
    @inject(RestBindings.Http.REQUEST) public req: Request
  ) { }

  @post('/book')
  @response(200, {
    description: 'Bookmodel model instance',
    content: {'application/json': {schema: getModelSchemaRef(Bookmodel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bookmodel, {
            title: 'NewBookmodel',
            exclude: ['id'],
          }),
        },
      },
    })
    bookmodel: Omit<Bookmodel, 'id'>,
    @param.header.string('authorization') token: string
  ): Promise<Bookmodel> {
    return this.bookmodelRepository.create(bookmodel);
  }

  @get('/book/count')
  @response(200, {
    description: 'Bookmodel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Bookmodel) where?: Where<Bookmodel>,
  ): Promise<Count> {
    return this.bookmodelRepository.count(where);
  }

  @get('/book')
  @response(200, {
    description: 'Array of Bookmodel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Bookmodel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.header.string('authorization') token: string,
    @param.filter(Bookmodel) filter?: Filter<Bookmodel>,
  ): Promise<Bookmodel[]> {
    verifyToken(token);
    return this.bookmodelRepository.find(filter);
  }

  @patch('/book')
  @response(200, {
    description: 'Bookmodel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bookmodel, {partial: true}),
        },
      },
    })
    bookmodel: Bookmodel,
    @param.where(Bookmodel) where?: Where<Bookmodel>,
  ): Promise<Count> {
    return this.bookmodelRepository.updateAll(bookmodel, where);
  }

  @get('/book/{id}')
  @response(200, {
    description: 'Bookmodel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Bookmodel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Bookmodel, {exclude: 'where'}) filter?: FilterExcludingWhere<Bookmodel>
  ): Promise<Bookmodel> {
    return this.bookmodelRepository.findById(id, filter);
  }

  @patch('/book/{id}')
  @response(204, {
    description: 'Bookmodel PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bookmodel, {partial: true}),
        },
      },
    })
    bookmodel: Bookmodel,
  ): Promise<void> {
    await this.bookmodelRepository.updateById(id, bookmodel);
  }

  @put('/book/{id}')
  @response(204, {
    description: 'Bookmodel PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() bookmodel: Bookmodel,
  ): Promise<void> {
    await this.bookmodelRepository.replaceById(id, bookmodel);
  }

  @del('/book/{id}')
  @response(204, {
    description: 'Bookmodel DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.bookmodelRepository.deleteById(id);
  }
}
