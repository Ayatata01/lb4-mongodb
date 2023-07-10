import { Entity } from '@loopback/repository';
export declare class Bookmodel extends Entity {
    book_name: string;
    desc: string;
    author: string;
    id?: number;
    constructor(data?: Partial<Bookmodel>);
}
export interface BookmodelRelations {
}
export type BookmodelWithRelations = Bookmodel & BookmodelRelations;
