const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FeedbackSchema=new Schema({
    event_id:{type:String,required:true},
    attendee_id:{type:String,required:true},
    role:{type:String,required:true},
    rating:{type:Number,required:true},
    comments:{type:String,required:true},
});

const FeedbackModel=mongoose.model('Feedback',FeedbackSchema);
module.exports=FeedbackModel;