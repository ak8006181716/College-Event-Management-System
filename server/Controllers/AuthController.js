const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const OrganizersModel = require("../Models/Organizers");
const FeedbackModel = require("../Models/Feedback");
const FacultyModel = require("../Models/Faculty");
const EventsModel = require("../Models/Events");
const AttendeesModel = require('../Models/Attendees');


 async function hellos(email,userName) {


    const transporter = nodemailer.createTransport({
        service:"gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
          user: "Eventora123@gmail.com", //the in this i am using gmailId is "eventora123@gmail.com"
          pass: "migl quhl hotv uipv", // the password created by the aap password from gmail security
        },
      });
    const mailoption = {
        from: {
            name:"EventOra",
            address:"EventOra"
        }, // sender address
        to: email, // list of receivers/one receiver
        subject: `Welcome to EventOra – Registration Successful!`, // Subject line
        html: `<h1>Dear ${userName},</h1><br>We are thrilled to welcome you to EventOra! Your registration has been successfully completed, and you're now part of an exciting community of event organizers and the participants.<br><br><h3>What's Next?</h3><div><ul><li> You can now start managing and participating in events through our platform.</li><br> <li>Explore various features designed to help you organize events seamlessly.</li></ul></div><br>If you need any assistance or have any questions, feel free to reach out to our support team at eventora123@gmail.com.<br><br>We are excited to have you on board and can’t wait to see the amazing events you’ll be part of!<br><br>Thank you for choosing EventOra!<br><br>Best regards,<br>The EventOra Team`,
         // html body
      }
    

  const info = await transporter.sendMail(mailoption);
  console.log("mail send !")
  
 }










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
            let shareEmail = {}; 
            shareEmail.email = userModel.email;
            shareEmail.userName = userModel.name;
            await hellos(shareEmail.email,shareEmail.userName).catch(console.error);
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
                success: true,
            })
            let shareEmail = {}; 
            shareEmail.email = userModel.email;
            shareEmail.userName = userModel.name;
            await hellos(shareEmail.email,shareEmail.userName).catch(console.error);
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
            throw err;
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
            let shareEmail = {}; 
            shareEmail.email = userModel.email;
            shareEmail.userName = userModel.name;
            await hellos(shareEmail.email,shareEmail.userName).catch(console.error);
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
    loginAsOrganizers,
}