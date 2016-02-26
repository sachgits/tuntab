/**
 * Created by sachg on 2/16/2016.
 */

import {mongoose} from './dbConfig';

Schema = mongoose.Schema;
SchemaType = mongoose.SchemaType;

var addressSchema = Schema({
id: SchemaType.ObjectId,
    street: String,
    city:String,
    state:String,
    country:String,
    email:String,
    phone:String,
});

export {addressSchema};