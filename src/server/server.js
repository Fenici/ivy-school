import mongoose from "mongoose";
mongoose.connect('mongodb://localhost/ivyschool', { useNewUrlParser: true })
var db = mongoose.connection

