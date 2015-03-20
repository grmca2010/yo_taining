'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    //uri: 'mongodb://localhost/myapp-dev'
	uri:"mongodb://test:test@dbh15.mongolab.com:27157/mean-dev"
  },

  seedDB: true
};
