const mongoClient = require("mongodb").MongoClient;

const state = {
  db: null,
};
module.exports.connect = function (done) {
  const url = process.env.MONGODB_ATLAS_URL; //mongodb://localhost:27017
  const dbname = "Freston_JobApply";
  mongoClient.connect(url, (err, data) => {
    if (err) {
      return done(err);
    } else {
      state.db = data.db(dbname);
      done();
    }
  });
  module.exports.get = function () {
    return state.db;
  };
};
