/// <reference types="express" />
import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Request } from '@loopback/rest';
import { Bookmodel } from '../models';
import { BookmodelRepository } from '../repositories';
export declare class BookController {
    bookmodelRepository: BookmodelRepository;
    req: Request;
    constructor(bookmodelRepository: BookmodelRepository, req: Request);
    create(bookmodel: Omit<Bookmodel, 'id'>, token: string): Promise<Bookmodel>;
    count(where?: Where<Bookmodel>): Promise<Count>;
    find(token: string, filter?: Filter<Bookmodel>): Promise<Bookmodel[]>;
    updateAll(bookmodel: Bookmodel, where?: Where<Bookmodel>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Bookmodel>): Promise<Bookmodel>;
    updateById(id: number, bookmodel: Bookmodel): Promise<void>;
    replaceById(id: number, bookmodel: Bookmodel): Promise<void>;
    deleteById(id: number): Promise<void>;
}
