const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const AttendeesSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
});

const AttendeesModel=mongoose.model('Attendees',AttendeesSchema);
module.exports=AttendeesModel;