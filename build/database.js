"use strict";

var mongosse = require('mongoose');
require('dotenv').config();
mongosse.connect(process.env.MONGO_URL).then(function () {
  return console.log('Conectado a AtlasDB');
})["catch"](function (error) {
  return console.log(error);
});