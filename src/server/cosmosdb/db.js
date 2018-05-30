import { accountName, key, port, databaseName } from "./env/config";
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// eslint-disable-next-line max-len
const mongoUri = `mongodb://${accountName}:${key}@${accountName}.documents.azure.com:${port}/${databaseName}?ssl=true`; //&replicaSet=globaldb`;

function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(mongoUri, { useMongoClient: true });
}

export default connect;