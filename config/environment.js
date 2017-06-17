/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'program',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
    
      
      apiUri: 'https://whispering-hamlet-99629.herokuapp.com/'
    }
  };

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
    baseURL: ''
  };

  ENV['ember-simple-auth-token'] = {
    refreshAccessTokens: false,
    authorizer: 'authorizer:token',
    identificationField: 'username',
    serverTokenEndpoint: ''
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiHost = 'https://whispering-hamlet-99629.herokuapp.com/';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiHost = "https://whispering-hamlet-99629.herokuapp.com/";
    ENV.apiVersion = "1";

 }
  ENV['ember-simple-auth'].baseURL = ENV.apiHost;
  ENV['ember-simple-auth-token'].serverTokenEndpoint = `${ENV.apiHost}/login`;
  return ENV;
};