import { useState } from 'react';
import { data } from './data';
import './App.css';

function Courses(){
    const [courses] = useState(data);
    

    return(<div>
{courses.map((element => {
    const {id, course, image} = element;
    return(<div key={id}>
        <div className='container one two'>
        <h3>{id} . {course}</h3>
        <img className='img' src={image} width="500px" alt='course'/>
        </div>
    </div>)
}))}
    </div>)
}
export default Courses;