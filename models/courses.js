const mongoos= require('mongoose');
const Joi = require("joi");

const courseSchema = new mongoos.Schema({
    name:{type:String,required:true},
    author:String,
    tags:{
        type:Array,
        validate:{
            validator:function(v){
                return v && v.length > 0
            },
            message:"A course should have at least one tag"

        }
    },
    date:{type:Date,default:Date.now},
    isPublished:Boolean,
    price:{
        type:Number,
        required:function(){
         return this.isPublished
        }
    }
})
const CourseModel = mongoos.model('Course',courseSchema)
const validateCourse = function (course) {
    const schema = {
        name:Joi.string().required(),
        author:Joi.string().required(),
        tags:Joi.array(),
        isPublished:Joi.boolean(),
        price:Joi.number()

    }
    return Joi.validate(course,schema)
}
exports.CourseModel = CourseModel;
exports.validateCourse = validateCourse;
