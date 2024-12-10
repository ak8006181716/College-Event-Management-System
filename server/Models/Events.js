const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const EventsSchema=new Schema({
    organizer_id:{type:String,required:true},
    event_name:{type:String,required:true},
    short_description:{type:String,required:true},
    long_description:{type:String,required:true},
    event_memebers:{type:String,required:true},
    date:{type:Date,required:true},
    time:{type:String,required:true},
    duration:{type:String,required:true},
    location:{type:String,required:true},
    poster_link:{type:String,required:true},
    faculty_id:{type:String,required:true},
    registration_link:{type:String,required:true},
    status:{type:Boolean,required:true}
});

const EventsModel=mongoose.model('Events',EventsSchema);
module.exports=EventsModel;