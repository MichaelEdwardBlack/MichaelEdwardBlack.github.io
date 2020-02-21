const dev = {
  picolabs: {
    protocol: "http",
    host: "192.168.11.36:8080"
  }
};

const prod = {
  picolabs: {
    protocol: "https",
    host: "192.168.11.36:8080"
  }
};

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
