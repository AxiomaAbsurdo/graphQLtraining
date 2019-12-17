import { start } from '../index'
//import { types, queries, mutations } from '../schema/course';
//const courseTypes = types


export default (start, action, object) =>{

if (action == 'save') {
    console.log('VEO VEO',  start.db)
    console.log('veo object ' , object)
    db.collection('inserts').insertOne(
        console.log('hizo el insert')
    )
}
}



//QUERY


// fetchCourse(id){

// }



// INSERTS



// UPDTATE




// DELETE


//module.export.Course = CourseQuery