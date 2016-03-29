/**
 * Created by sachg on 2/16/2016.
 */
import mongoose from 'mongoose'

var Schema = mongoose.Schema;


var destinationSchema = new Schema({
    id: Schema.ObjectId,
    CoOrdinates:{type:String},
    timeOfVisit: Date
});

export {destinationSchema};