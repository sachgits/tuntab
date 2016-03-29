'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShareSchema = undefined;

var _dbConfig = require('./dbConfig');

var _commonTypes = require('./commonTypes');

/**
 * Created by sachg on 2/20/2016.
 */

var SchemaType = _dbConfig.mongoose.SchemaType;
var Schema = _dbConfig.mongoose.Schema;

var ShareSchema = new Schema({
  common: _commonTypes.commonSchema,
  item_id: SchemaType.ObjectId
});

exports.ShareSchema = ShareSchema;

//not very sure of how shares work

//# sourceMappingURL=SharesSchema-compiled.js.map