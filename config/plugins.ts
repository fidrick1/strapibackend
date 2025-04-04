export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dwxoqsw0v'),
        api_key: env('918448345143175'),
        api_secret: env('3pwPSpZo0RF5Wd2G7elKbix0Zok'),
      },
    },
  },
});
