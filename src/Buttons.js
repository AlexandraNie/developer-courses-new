import { useState } from 'react';
import { data } from './data';
import './App.css';

function Buttons(){
    const [courses, setCourses] = useState(data);
   
    const removeCourse = (id) => {
        let newCourses = courses.filter (course => course.id !==id);
        setCourses(newCourses);
        } 
      
    return(<div>
{courses.map((element => {
    const {id} = element;
    return(<div key={id}>
        <div className='container one two title'>
      <button className='word'>BOOK NOW</button>


    <button  onClick={() => removeCourse(id)} className='remove'>Remove</button>
    </div>
    </div>)
}))}
    </div>)
}
export default Buttons;