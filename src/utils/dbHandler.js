import { Mongoose } from 'mongoose';
//import { types, queries, mutations } from '../schema/course';



//const courseTypes = types

const courseSchema = new Mongoose.Schema({
    name: String,
    language: String,
    date: Date.now
})

const Course = mongoose.model('course', courseSchema)
//QUERY

mongoose.Schema( (CourseResolver) =>{
    course = CourseResolver.getCourse(id)
} )

fetchCourse(id){
    
}



// INSERTS



// UPDTATE




// DELETE


module.export.Course = CourseQuery