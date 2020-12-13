const config = require('../secret/config.js');
const db = require('../models');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.singin = (req, res) => {
    db.user.findOne({
        where:{
            email: req.body.email
        }
    })
}