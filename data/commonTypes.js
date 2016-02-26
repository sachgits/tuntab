/**
 * Created by sachg on 2/20/2016.
 */
import {mongoose} from './dbConfig'

var SchemaType = mongoose.SchemaType;
var Schema = mongoose.Schema;

var CommonFieldsSchema =  new Schema({
    id: SchemaType.ObjectId,
    user_info: {id:SchemaType.ObjectId, profilePhoto:String,fullnames:String},
    time_stamp:{type: Date, onUpdate: Date.now()}
});
export {CommonFieldsSchema};