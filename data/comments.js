/**
 * Created by sachg on 2/20/2016.
 */

import mongoose from 'mongoose';


import {CommonFieldsSchema} from './commonTypes';
var Schema = mongoose.Schema;


var commentsSchema = new Schema({
    common: CommonFieldsSchema,
    comment:String
});

export {commentsSchema};