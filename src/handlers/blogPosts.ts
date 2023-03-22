import { APIGatewayProxyHandler } from 'aws-lambda';
import { getRepository } from 'typeorm';
import { BlogPost } from '../entities/BlogPost';
import { validateRequest } from '../utils/validator';
import { blogPostSchema } from '../schemas/blogPosts';

export const createBlogPost: APIGatewayProxyHandler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    let error = false;

    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid request', error }),
      };
    }

    const blogPostRepository = getRepository(BlogPost);
    const blogPost = blogPostRepository.create(body);
    await blogPostRepository.save(blogPost);

    return {
      statusCode: 201,
      body: JSON.stringify(blogPost),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
