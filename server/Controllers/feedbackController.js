
const FeedbackModel = require("../Models/Feedback");

const feedback = async (req, res) => {
    try {
        const feedbackModel = new FeedbackModel(req.body);
        await feedbackModel.save();
        res.status(201)
            .json({
                message: "Feedback submitted successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: err.message,
                success: false
            })
    }
}

module.exports = {
    feedback
}