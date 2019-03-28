const express = require('express');
const router = express.Router();
const Course = require('../modules/courses');

var course = new Course()

router.get('/',course.get)

router.get('/:id',(req,res)=>{
    res.send(req.params.id);
})
router.put('/:id',course.update);
router.delete('/:id',course.remove);


router.post('/',course.add);

module.exports = router