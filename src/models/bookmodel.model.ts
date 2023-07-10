import {Entity, model, property} from '@loopback/repository';

@model()
export class Bookmodel extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  book_name: string;

  @property({
    type: 'string',
    required: true,
  })
  desc: string;

  @property({
    type: 'string',
    required: true,
  })
  author: string;

  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectId'}
  })
  id?: number;


  constructor(data?: Partial<Bookmodel>) {
    super(data);
  }
}

export interface BookmodelRelations {
  // describe navigational properties here
}

export type BookmodelWithRelations = Bookmodel & BookmodelRelations;
