/**
 * Created by sachg on 2/16/2016.
 */
import {mongoose} from './dbConfig'

Schema = mongoose.Schema;
SchemaTypes = mongoose.SchemaType;

var productsSchema = new Schema({
    sku: SchemaTypes.ObjectId,
    title: String,
    description:String,
    quantity:SchemaTypes.number,
    value: SchemaTypes.float,
    photoAlbum: String,
    dateTime_created: {timeStamp: {createdAt: 'createdAt'}},
    manufacture_details:{
        model_number: String
    }
});

export {productsSchema};

