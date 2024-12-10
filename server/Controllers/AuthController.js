const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const OrganizersModel = require("../Models/Organizers");
const FeedbackModel = require("../Models/Feedback");
const FacultyModel = require("../Models/Faculty");
const EventsModel = require("../Models/Events");
const AttendeesModel = require('../Models/Attendees');


const registerAsAttendees = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await AttendeesModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new AttendeesModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
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

const registerAsOrganizers = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await OrganizersModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new OrganizersModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

const registerAsFaculty = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await FacultyModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new FacultyModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}


const loginAsAttendees = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AttendeesModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                id:user.id,
                email,
                name: user.name,
                type:"attendee"
            })
    } catch (err) {
        res.status(500)
            .json({
                message: err.message,
                success: false
            })
    }
}

const loginAsFaculty = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await FacultyModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                id:user.id,
                email,
                name: user.name,
                type:"faculty"
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

const loginAsOrganizers = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await OrganizersModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                id:user.id,
                email,
                name: user.name,
                type:"organizer"
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

module.exports = {
    registerAsAttendees,
    loginAsAttendees,
    registerAsFaculty,
    loginAsFaculty,
    registerAsOrganizers,
    loginAsOrganizers
}