const mongoose = require('mongoose');
const config = require('config');
const { string } = require('joi');

const studentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true   
    },
    last_name: {
        type: String,
        required: true
    }, 
    roll_no: {
        type: Number,
        required: true,
        
    }
});

const Student = mongoose.model('Student', studentSchema);

const validateStudent = (student) => {
    const schema = {
        first_name: string().required(),
        last_name: string().required(),
        roll_no: number().required()
        
    }
}

exports.Student = Student;
exports.validate = validateStudent;