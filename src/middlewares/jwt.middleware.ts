import {HttpErrors} from '@loopback/rest';
import {JsonWebTokenError, sign, verify} from 'jsonwebtoken';

const secretKey = 'veryverysecret';

export function signToken(email: string, id: any): string {
  const token = sign(
    {sup: id, email: email},
    secretKey,
    {expiresIn: '1d'},
  );

  return token
}

export function verifyToken(token: string): {userId: string, email: string} {
  const split = token?.split(' ')[1];
  try {
    const decoded = verify(split, secretKey);
    return decoded as {userId: string, email: string};
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      throw new HttpErrors.Unauthorized('Invalid token');
    } else {
      throw error;
    }
  }
}
