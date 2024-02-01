
const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect('mongodb+srv://faraz:BlackPanther12@cluster.0q32rvc.mongodb.net/?retryWrites=true&w=majority', {
        
    }).then(() => console.log('Mongo Db Connected.....'));
}