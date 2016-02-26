/**
 * Created by sachg on 2/20/2016.
 */
import {mongoose} from './dbConfig';
import {commonSchema} from './commonTypes';
var SchemaType = mongoose.SchemaType;
var Schema = mongoose.Schema;

var ShareSchema = new Schema({
    common: commonSchema,
    item_id: SchemaType.ObjectId
});

export {ShareSchema};

//not very sure of how shares work