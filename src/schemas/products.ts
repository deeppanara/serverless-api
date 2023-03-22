export const productSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      description: { type: 'string' },
      price: { type: 'number' },
    },
    required: ['name', 'description', 'price'],
  };
  