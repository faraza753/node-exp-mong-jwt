
const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect('mongodb+srv://enter the connection string', {
        
    }).then(() => console.log('Mongo Db Connected.....'));
}