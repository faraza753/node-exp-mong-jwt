const validator = require("validator")
const bcrypt = require('bcrypt');
const {User} = require('../models/user');


const login = async (req, res, next) => {

    if(!validator.isEmail(req.body.email))
    {
        return res.status(422).json({ error:"email is not valid"});
    }

    const user = await User.findOne({email: req.body.email}).exec();
    if(!user) return res.status(404).json({error:'Invalid email or password'});

    const validPassword= await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(404).json({error:'Invalid email or password'});

    const token  = user.generateAuthToken();
    res.send(token);
}

const validate = (req) => {
    const schema = {
        email: string().required().email(),
        password: string().required()
    }

  
}

module.exports = {
    login
}