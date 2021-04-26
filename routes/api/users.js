const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");
var MongoClient = require('mongodb').MongoClient;
// Configuring the database
const dbConfig = require("../../config/keys");



router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          tags: req.body.tags,
          profilePicture: req.body.profilePicture,
          publicKey: req.body.publicKey,
          loggedIn: req.body.loggedIn,
          contractsSent: req.body.contractsSent,
          contractsReceived: req.body.contractsReceived
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

  // @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
    MongoClient.connect(dbConfig.mongoURI, function(err, db) {
      //alert('test');
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      dbo.collection("users").findOneAndUpdate({email: email}, {$set: {loggedIn: "logged"}});
  });
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });


  router.post("/updateSent", (req, res) => {
    MongoClient.connect(dbConfig.mongoURI, function(err, db) {
      //alert('test');
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      dbo.collection("users").findOneAndUpdate({email: req.body.email}, {$push: {contractsSent: [req.body.desc, req.body.recipient, req.body.amount]}});
          
  });

  })

  router.get("/showcontracts", (req, res) => {
    //alert('testttt');
    MongoClient.connect(dbConfig.mongoURI, function(err, db) {
        //alert('test');
        if (err) throw err;
        var dbo = db.db("myFirstDatabase");
        dbo.collection("users").find({loggedIn: "logged"}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
})

  router.get("/showreality", (req, res) => {
    //alert('testttt');
    MongoClient.connect(dbConfig.mongoURI, function(err, db) {
        //alert('test');
        if (err) throw err;
        var dbo = db.db("myFirstDatabase");
        dbo.collection("users").find({tags: "Reality TV"}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
})

router.get("/showyoutube", (req, res) => {
  //alert('testttt');
  MongoClient.connect(dbConfig.mongoURI, function(err, db) {
      //alert('test');
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      dbo.collection("users").find({tags: "Youtubers"}).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
      });
  });
})

router.get("/showblogger", (req, res) => {
  //alert('testttt');
  MongoClient.connect(dbConfig.mongoURI, function(err, db) {
      //alert('test');
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      dbo.collection("users").find({tags: "Bloggers"}).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
      });
  });
})

router.get("/showmicroinfluencer", (req, res) => {
  //alert('testttt');
  MongoClient.connect(dbConfig.mongoURI, function(err, db) {
      //alert('test');
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      dbo.collection("users").find({tags: "Microinfluencers"}).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
      });
  });
})

router.get("/showbeauty", (req, res) => {
  //alert('testttt');
  MongoClient.connect(dbConfig.mongoURI, function(err, db) {
      //alert('test');
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      dbo.collection("users").find({tags: "Beauty"}).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
      });
  });
})

router.get("/showlifestyle", (req, res) => {
  //alert('testttt');
  MongoClient.connect(dbConfig.mongoURI, function(err, db) {
      //alert('test');
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      dbo.collection("users").find({tags: "Lifestyle"}).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
      });
  });
})

router.get("/showfashion", (req, res) => {
  //alert('testttt');
  MongoClient.connect(dbConfig.mongoURI, function(err, db) {
      //alert('test');
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      dbo.collection("users").find({tags: "Fashion"}).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
      });
  });
})

router.get("/showsmallbusiness", (req, res) => {
  //alert('testttt');
  MongoClient.connect(dbConfig.mongoURI, function(err, db) {
      //alert('test');
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      dbo.collection("users").find({tags: "Small Businesses"}).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
      });
  });
})

router.get("/showfood", (req, res) => {
  //alert('testttt');
  MongoClient.connect(dbConfig.mongoURI, function(err, db) {
      //alert('test');
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      dbo.collection("users").find({tags: "Food"}).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
      });
  });
})

router.get("/showsustainablebusiness", (req, res) => {
  //alert('testttt');
  MongoClient.connect(dbConfig.mongoURI, function(err, db) {
      //alert('test');
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      dbo.collection("users").find({tags: "Sustainable Businesses"}).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
      });
  });
})

router.get("/showtravel", (req, res) => {
  //alert('testttt');
  MongoClient.connect(dbConfig.mongoURI, function(err, db) {
      //alert('test');
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      dbo.collection("users").find({tags: "Travel"}).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
      });
  });
})

router.get("/showfitness", (req, res) => {
  //alert('testttt');
  MongoClient.connect(dbConfig.mongoURI, function(err, db) {
      //alert('test');
      if (err) throw err;
      var dbo = db.db("myFirstDatabase");
      dbo.collection("users").find({tags: "Fitness"}).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
      });
  });
})

  module.exports = router;