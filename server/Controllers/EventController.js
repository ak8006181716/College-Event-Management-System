
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

module.exports = {
    addEvents
}