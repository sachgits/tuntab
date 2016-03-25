/**
 * Created by sachg on 2/16/2016.
 */
<<<<<<< Updated upstream
const MONGO_CONNECTION = "mongodb://localhost/tuntab";
const MONGO_USER = "admin";
const MONGO_PASS = "12345";

import mongoose from 'mongoose';
if(!mongoose.connection)
    mongoose.connect(MONGO_CONNECTION);
=======
import {mongoose} from './dbConfig';
>>>>>>> Stashed changes

var Schema = mongoose.Schema;


var destinationSchema = new Schema({
    id: Schema.ObjectId,
    CoOrdinates:{type:String},
    timeOfVisit: Date
});

export {destinationSchema};