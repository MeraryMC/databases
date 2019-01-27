var db = require('../db');


module.exports = {
  messages: {
    get: function (callback) {

      var queryStr = 'select messages.ID, messages.message, messages.roomname, users.username \
      from messages left outer join users on (messages.userID = users.ID) \
      order by messages.ID desc';

      db.query(queryStr, function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(results);
        }
      });
    },

    post: function (params, callback) {

      var queryStr = 'insert into messages(message, userID, roomname) \
      value (?, (select id from users where username = ? limit 1), ?)';

    db.query(queryStr, params, function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(results);
        }
      });
    }
  },

  users: {
    get: function (callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(results);
        }
      });
    },

    post: function (params, callback) {
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(results);
        }
      })
    }
  }
};






