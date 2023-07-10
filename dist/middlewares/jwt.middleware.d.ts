export declare function signToken(email: string, id: any): string;
export declare function verifyToken(token: string): {
    userId: string;
    email: string;
};
