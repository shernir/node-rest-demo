var url = "http:/logg.io"
const {CourseModel,validateCourse} = require ("../models/courses")


class Courses  {

    get(req,res,next) {
      
        CourseModel.find().then((result)=>{
            res.send(result);

        })    
    }
    update(req,res,next){
    
      let id = req.params.id;
      console.log(id)

      CourseModel.findByIdAndUpdate(id,{
        $set:{
        author:req.body.author,
        isPublished:false    
        }  
      },{new:true}).then(function(result){
          res.send(result)
      })

    }
    remove(req,res,next){
    
        let id = req.params.id;
        console.log(id)
  
        CourseModel.deleteOne({_id:id}).then(function(result){
            res.send(result)
        })
  
    }
    add(req,res,next){
        console.log(req.body)
        const {error} = validateCourse(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        let course = new CourseModel ({
            name:req.body.name,
            author:req.body.author,
            tags:req.body.tags,
            price:req.body.price,
            isPublished:req.body.isPublished
        }) ;
        course.save().then((result)=>{
            console.log('course saved !')
            console.log(result);
            res.send(result)
            
        }).catch((error)=>{
            console.log('Error happen !')
            console.log(error);
            res.send(error)

        })

    }

}


module.exports = Courses