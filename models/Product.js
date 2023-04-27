const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
title:{type:String, required:true},
slug:{type:String, required:true,unique:true},
desc:{type:String, required:true},
image:{type:String, required:true},
category:{type:String, required:true},
color:{type:String},
price:{type:Number, required:true},
AvailQty:{type:Number, required:true},


},{timestamps:true});
mongoose.models={}
export default mongoose.model("Product",ProductSchema)