/**
 * Created by sachg on 2/20/2016.
 */
import mongoose from 'mongoose'

var SchemaType = mongoose.SchemaType;
var Schema = mongoose.Schema;

var CommonFieldsSchema =  new Schema({
    id: Schema.ObjectId,
    user_info: {id:Schema.ObjectId, profilePhoto:String,fullnames:String},
    time_stamp:{type: Date, onUpdate: Date.now}
});
export {CommonFieldsSchema};