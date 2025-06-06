interface EnvHelper {
  (key: string, defaultValue?: any): any;
  int: (key: string, defaultValue?: number) => number;
  array: (key: string, defaultValue?: any[]) => any[];
}

export default ({ env }: { env: EnvHelper }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['defaultKey1', 'defaultKey2']), // Provide default keys if APP_KEYS is missing
  },
});
