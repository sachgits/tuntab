/**
 * Created by sachg on 2/20/2016.
 */

import {mongoose} from './dbConfig';
import {CommonFieldsSchema} from './commonTypes';
Schema = mongoose.Schema;
SchemaType = mongoose.SchemaType;

var commentsSchema = new Schema({
    common: CommonFieldsSchema,
    comment:String
});

export {commentsSchema};