var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


  // app.post('/data', function(req, res) {
  //   connection.query
  //   if (err) {
  //     return;
  //   }

    //https://stackoverflow.com/questions/45891998/posting-form-data-to-mysql-using-nodejs-w-express
