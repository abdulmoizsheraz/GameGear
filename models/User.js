// getting-started.js
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
username:{type:String, required:true},
email:{type:email, required:true,unique:true},
password:{type:String, required:true},




},{timestamps:true});
export default mongoes.model("User",UserSchema)