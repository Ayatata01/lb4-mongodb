import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {HttpErrors, Request, Response, RestBindings, post, requestBody} from '@loopback/rest';
import {compare, hash} from 'bcrypt';
import {signToken} from '../middlewares/jwt.middleware';
import {User} from '../models';
import {UserRepository} from '../repositories';

interface Login {
  email: string,
  password: string
}

export class UserController {
  constructor(@repository(UserRepository) public userRepository: UserRepository, @inject(RestBindings.Http.REQUEST) public req: Request, @inject(RestBindings.Http.RESPONSE) public res: Response) { }

  @post('/auth/signup')
  async signup(@requestBody() user: User): Promise<{saveData: User}> {
    // console.log(user.name)
    // console.log(this.req.body)
    try {
      const findEmailRegistered = await this.userRepository.findOne({
        where: {
          email: user.email
        }
      })

      if (findEmailRegistered) {
        throw HttpErrors.BadRequest('email has taken')
      }
    } catch (error) {
      throw HttpErrors(error)
    }

    user.password = await hash(user.password, 10)

    const saveData = await this.userRepository.create(user)
    return {
      saveData
    }
  }

  @post('/auth/signin')
  async signin(@requestBody() credentials: Login): Promise<{token: string}> {
    const user = await this.userRepository.findOne({
      where: {
        email: credentials.email
      }
    })

    if (!user) throw HttpErrors.NotFound('Invalid Credentials')

    const passwordMatched = await compare(credentials.password, user.password)

    if (!passwordMatched) throw HttpErrors.NotFound('Invalid Credentials')

    const token = signToken(user.email, user.id)
    return {
      token
    }
  }
}
