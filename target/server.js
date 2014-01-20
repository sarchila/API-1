(function() {
  var app, cors, express, mongoConfig, mongoose;

  express = require('express');

  mongoose = require('mongoose');

  cors = require('./config/middleWare');

  mongoConfig = require('./config/dbconfig');

  mongoose.connect(mongoConfig.url);

  app = express();

  app.set('port', process.env.PORT || 3000);

  app.use(express.logger('dev'));

  app.use(cors.headers);

  app.use(express.bodyParser());

  app.use(express.methodOverride());

  require('./config/routes')(app);

  app.listen(app.get('port'));

  console.log("I hears ya on " + (app.get('port')) + " breh!");

}).call(this);

/*
//# sourceMappingURL=../target/config/server.js.map
*/