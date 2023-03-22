export const userSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string', format: 'email' },
      password: { type: 'string', minLength: 8 },
    },
    required: ['name', 'email', 'password'],
  };
  