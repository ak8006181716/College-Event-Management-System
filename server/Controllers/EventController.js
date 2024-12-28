
const EventsModel = require("../Models/Events");

const addEvents = async (req, res) => {
    try {
        const eventModel = new EventsModel(req.body);
        await eventModel.save();
        res.status(201)
            .json({
                message: "Event created successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: err,
                success: false
            })
    }
}


const showEvents = async (req, res) => {
    try {
        const { name } = req.body;
        const events = await EventsModel.find({name}); 
        res.status(201)
            .json({
                events:yes,
                success: true
            })
          
    } catch (err) {
        res.status(500)
            .json({
                message: err,
                success: false
            })
    }
}

module.exports = {
    addEvents,
    showEvents
}