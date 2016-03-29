/**
 * Created by sachg on 2/20/2016.
 */
import {mongoose} from './dbConfig';
import {commonSchema} from './commonTypes';

var Schema = mongoose.Schema;

var ShareSchema = new Schema({
    common: commonSchema,
    item_id: Schema.ObjectId
});

export {ShareSchema};

//not very sure of how shares work