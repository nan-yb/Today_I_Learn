const { MongoClient } = require('mongodb');

const uri =
  'mongodb+srv://ybUser:1234@ybdb.5qfhq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client;
