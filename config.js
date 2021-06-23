// Create and export configuration variables

const { env } = require("process");

// Container for all the environments
let environments = {};

// Staging (default) envionment
environments.staging = {
  'httpPort': 3000,
  'httpsPort': 3001,
  'envName': 'staging'
};

// Production environment
environments.production = {
  'httpPort': 5000,
  'httpsPort': 5001,
  'envName': 'production'
};

// Determine which env was passed as a command-line argument
const currentEnv = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the currentEnv is defined above and default to staging otherwise
const exportEnv = typeof(environments[currentEnv]) === 'object' ? environments[currentEnv] : environments.staging;

// Export module
module.exports = exportEnv;