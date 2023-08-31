import { useState } from 'react';
import { data } from './data';
import './App.css';

function Delete(){
    const [courses, setCourses] = useState(data);
  

    return(<div>
        {courses.map((element => {
            const {id} = element;
            return(<div key={id}>
                <div className='container'>
       <button className='word' onClick={() => setCourses([]) }>DELETE ALL</button>

       </div>
            </div>)
        }))}
            </div>)
    
    }
   

export default Delete;