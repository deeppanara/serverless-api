import { APIGatewayProxyHandler } from 'aws-lambda';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import { validateRequest } from '../utils/validator';
import { userSchema } from '../schemas/users';

export async function createUser(event) {
  try {
    const body = JSON.parse(event.body);
    let error = false;
    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid request', error }),
      };
    }

    const userRepository = getRepository(User);
    const user = userRepository.create(body);
    await userRepository.save(user);

    return {
      statusCode: 201,
      body: JSON.stringify(user),
    };
  } catch (error) {
    return {};
  }
}

export async function getUser(event) {
  try {

    const userRepository = getRepository(User);
    const users = userRepository.find();

    return {
      statusCode: 201,
      body: JSON.stringify(users),
    };
  } catch (error) {
    return {};
  }
}
