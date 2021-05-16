const envName = process.env.NODE_ENV;

const environment = {
  appVersion: process.env.REACT_APP_VERSION,
  envName,
  isProduction: envName === 'production',
  api: 'https://jsonplaceholder.typicode.com',
  sentryDsn:
    'https://d07c5b65b45e4d82b02e745df99a5de8@sentry.mybioma.com:9000/15',
};

export default environment;
