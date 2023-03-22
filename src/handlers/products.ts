import { APIGatewayProxyHandler } from 'aws-lambda';
import { getRepository } from 'typeorm';
import { Product } from '../entities/Product';
import { validateRequest } from '../utils/validator';
import { productSchema } from '../schemas/products';

export const createProduct: APIGatewayProxyHandler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    let error = false;
    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid request', error }),
      };
    }

    const productRepository = getRepository(Product);
    const product = productRepository.create(body);
    await productRepository.save(product);

    return {
      statusCode: 201,
      body: JSON.stringify(product),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
