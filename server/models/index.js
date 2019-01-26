var db = require('../db');


module.exports = {
  messages: {
    get: function () {
      db.query("SELECT * from messages")
      //from server-spec.js line 55: the first arg is the queryString,the 2nd arg is queryArgs (optional? right now empty array), the 3rd arg is a cb fn
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


//from w3schools
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


// helper function to write messages to file on server
var writeMessage = function() {
  var savedMessage = JSON.stringify(messages);
  fs.writeFile('filePath', savedMessage, 'utf8', function(err) {
    if (err) {
      return;
    }
  });
};

