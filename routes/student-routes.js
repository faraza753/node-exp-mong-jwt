const express = require('express');
const auth = require('../middleware/auth');
const {addStudent, getStudent, updateStudent, deleteStudent} = require('../controllers/studentController');

const router = express.Router();

router.post('/student', auth, addStudent);
router.get('/students', auth,  getStudent);
router.patch('/student/:id', auth, updateStudent);
router.delete('/student/:id', auth, deleteStudent);


module.exports = {
    routes: router
}