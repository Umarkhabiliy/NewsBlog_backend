var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
/* GET home page. */
const adminSchema = require('../schema/admin');
router.get('/',async function (req, res, next) {
  try {
    const reslutAdmin = await adminSchema.find({});
    res.json(reslutAdmin);
  } catch (error) {
    res.json({
      xato: "Admins Get Method Error"
    });
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const admins = await adminSchema(req.body);
    admins.save();
    res.json(admins);
  } catch (error) {
    res.json({
      xato: "signup admins for post method error"
    });
  }
});


router.post('/signin', async (req, res, next) => {
  let token;
  try {
    const admins = await adminSchema.findOne({
      username: req.body.username,
      password: req.body.password
    }).then((result) => {
      token = jwt.sign({
        result, isAdmin: result != null ? true : false
      }, 'secretKey');
    });
    res.json(token);
  } catch (error) {
      res.json({
        xato: 'Sign in admins for post method Error' + error
      });
  }
})
module.exports = router;
