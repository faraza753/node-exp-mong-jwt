const { model } = require('mongoose');
const {Student, validate} = require('../models/student');


const addStudent = async (req, res, next) => {
            if(typeof req.body.first_name !== 'string')
            {
                return res.status(422).json({error:"first_name must be string"});
            }
    
            if(typeof req.body.last_name !== 'string')
            {
                return res.status(422).json({error: "last_name must be a string"});
            } 

        let student = new Student({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            roll_no: req.body.roll_no,
            
        });

        student =  await student.save(); 
        res.send(student);
}

const getStudent = async (req, res, next) => {
    const student = await Student.find().sort('first_name').exec();
    res.send(student);
}


const updateStudent = async (req, res, next) => {
    if(typeof req.body.first_name !== 'string')
    {
        return res.status(422).json({error:"first_name must be string"});
    }
    
    if(typeof req.body.last_name !== 'string')
    {
        return res.status(422).json({error: "last_name must be a string"});
    } 

    let student = await Student.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        roll_no: req.body.roll_no,
        
    }, {new: true});

    if(!student) return res.status(422).json({error: 'The Student with the given id not found'});
    res.send(student);
}

const deleteStudent = async (req, res, next) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    if(!student) return res.status(422).json({error:'The Student with the given id not found'});

    res.send(student);
}


module.exports = {
    addStudent,
    getStudent,
    updateStudent,
    deleteStudent
}