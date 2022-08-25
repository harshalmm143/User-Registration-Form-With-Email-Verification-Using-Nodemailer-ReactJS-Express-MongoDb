const User = require("./User")
require('dotenv').config()
const nodemailer = require("nodemailer")
const jwt = require('jsonwebtoken')
const Config = require('./Config')

exports.adduser = (req, res) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL || 'testtaskh0071@gmail.com',
            pass: process.env.PASSWORD || 'ubfhlwngvleenqei'
        }
    });

    const NewUser = new User({
        UserName: req.body.UserName,
        UserEmail: req.body.UserEmail,
        UserPassword: req.body.UserPassword,
        UserLanguage: req.body.UserLanguage,
        UserMobile: req.body.UserMobile
    })
    NewUser.save()
        .then((userdata) => {

            var mailMessage = ""
            if (userdata.UserLanguage === "English") {
                mailMessage = "Dear " + userdata.UserName + ", Please" .concat("<a href='http://localhost:3000/verify'> click here</a>") + " to verify your email.Thanks"
            } else {
                mailMessage = "Lieber" + userdata.UserName + ",Bitte" .concat("<a href='http://localhost:3000/verify'> klicken Sie hier</a>") + " um Ihre E-Mail-Adresse zubestätigen. Vielen Dank"
            }
            let mailOptions = {
                from: 'testtaskh0071@gmail.com',
                to: userdata.UserEmail,
                subject: 'Account Varification',
                text: mailMessage,
                html: mailMessage
            };

            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    res.status(500).json({
                        data: err.message,
                        user: userdata,
                        message: "Register but varification mail not sent"
                    })
                } else {
                    const token = jwt.sign({ id: userdata._id }, Config.secret, {
                        expiresIn: 180
                    });


                    res.status(200).json({
                        data: userdata,
                        message: "Varification Mail Send to Email",
                        Token: token
                    })

                }
            })

        }).catch((err) => {
            res.status(500).send(err)

        });
}

exports.alluser = (req, res) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({ auth: false, Message: 'No Token Provid' })
    } else {
        jwt.verify(token, Config.secret, function (err, decoded) {
            if (err) {
                return res.status(500).json({ auth: false, Message: 'Authanication Fail ' })
            } else {
                User.find()
                    .then((AllUser) => {
                        res.status(200).json({ data: AllUser, decode: decoded })

                    }).catch((err) => {
                        res.status(500).send(err)

                    });
            }
        })
    }

}

exports.getUserByEmail = (req, res) => {
    User.find({
        UserEmail: req.params.Email
    })
        .then((user) => {
            res.status(200).json(user)

        }).catch((err) => {
            res.status(500).send(err)

        });
}

exports.userExist = (req, res) => {
    User.exists({
        Email: req.params.Email
    })
        .then((user) => {
            if (user === null) {
                res.status(200).json({
                    message: "Not Register"
                })
            } else {
                res.status(200).json(user)
            }

        }).catch((err) => {
            res.status(500).send(err)

        });
}


exports.deleteuser = (req, res) => {
    User.findByIdAndDelete(req.params.UserId)
        .then((DeleteUser) => {
            res.status(200).json(DeleteUser)

        }).catch((err) => {
            res.status(500).send(err)

        });

}

exports.updateuser = (req, res) => {
    User.findByIdAndUpdate(req.params.UserId,
        {
            UserName: req.body.UserName,
            UserEmail: req.body.UserEmail,
            UserPassword: req.body.UserPassword,
            UserLanguage: req.body.UserLanguage,
            UserMobile: req.body.UserMobile
        }, { new: true })
        .then((UpdateUser) => {
            res.status(200).json(UpdateUser)

        }).catch((err) => {
            res.status(500).send(err)

        });

}