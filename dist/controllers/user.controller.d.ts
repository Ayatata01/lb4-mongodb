/// <reference types="express" />
import { Request, Response } from '@loopback/rest';
import { User } from '../models';
import { UserRepository } from '../repositories';
interface Login {
    email: string;
    password: string;
}
export declare class UserController {
    userRepository: UserRepository;
    req: Request;
    res: Response;
    constructor(userRepository: UserRepository, req: Request, res: Response);
    signup(user: User): Promise<{
        saveData: User;
    }>;
    signin(credentials: Login): Promise<{
        token: string;
    }>;
}
export {};
