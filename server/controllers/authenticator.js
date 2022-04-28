const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const {createToken} =  require("../utils/create-token");

const { findUser, saveUser, Newpassword} = require('../../db/Gateway');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    console.log("here it is the data insereted");
    //console.log(req.body);

    const data = await findUser(email, password);
    console.log(data);
    if (!data.emailFound)
       return res.json({requestSucceeded: false, emailFound: false });
    if (!data.passwordFound)
       return res.json({requestSucceeded: false, emailFound: true, passwordIncorrect: true  });
    else
       return res.json(createToken(data));

}

async function logout(req, res) {  

}

async function signup(req, res) {
        const Nom = req.body.nom;
        const Prenom = req.body.prenom;
        const Email = req.body.email;
        const Role = req.body.role;
        const Profession = req.body.profession;
        const Password = req.body.password;
        const Password1 = req.body.password;

        const data = await saveUser(Nom, Prenom, Email, Role, Profession, Password, Password1);
        console.log(data);
        res.json({data});
}

async function reset(req, res) {

  console.log("here it is the data to update");
  console.log(req.body.email);
 // console.log(req.body);
  
  await Newpassword(req.body.password1,req.body.email);
  return res.json({status: 'ok', message: 'Password reset. Please login with your new password.'});
}

async function forgetpassword(req,res){
    console.log("here it is the email who to reset his password");
    console.log(req.body.email);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'esiuser22@gmail.com',
        pass: 'rootroot',
      }

    });
    
    var mailOptions = {
      from: 'esiuser22@gmail.com',
      to: req.body.email,
      subject: 'Reset password',
      text: 'To reset your password, please click the link below.\n\nhttp://localhost:3000/auth/reset',
    }
      
    
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.json(err);
      } else {
        res.json('Email sent successfully');
      }
    });
    
}

module.exports = { login,logout,signup,reset,forgetpassword}