const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validate} = require('../models/user'); 
const validator = require('validator');


const addUser = async (req, res, next) => {
    
    if(!validator.isEmail(req.body.email))
    {
        return res.status(422).json({error: "email must be in a format"});
    }
    
    if(typeof req.body.name !== 'string')
    {
        return res.status(422).json({error: "name must be a string"});
    } 

    let user = await User.findOne({ email: req.body.email }).exec();
    if (user) return res.status(422).json({error:'User with this email already exists'});

    
    user = new User(_.pick(req.body, ['name', 'email', 'password']));

    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);

    await user.save();

   
    const token = user.generateAuthToken();

    
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email'])); 
}

module.exports = {
    addUser
}
