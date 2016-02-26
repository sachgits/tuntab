/**
 * Created by sachg on 2/16/2016.
 */
const MONGO_CONNECTION = "mongodb://localhost/tuntab";
const MONGO_USER = "admin";
const MONGO_PASS = "12345";

import {mongoose} from 'mongoose';

mongoose.connect(MONGO_CONNECTION);

export {mongoose};
