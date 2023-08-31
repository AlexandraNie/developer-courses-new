import { useState } from 'react';
import { data } from './data';
import './App.css';

function Description(){
    const [courses, setCourses] = useState(data);
    const [showMore, setShowMore] = useState (false);

    const showMoreClick = (element) => {
        element.showMore = !element.showMore
        setShowMore(!showMore)
      }
      
    return(<div>
{courses.map((element => {
    const {id, course, image, description, showMore} = element;
    return(<div key={id}>
        <div className='container one two'>
        <div className='container one two'>
        <p>{showMore ? description : description.substring(0,180) + "..." }
        <button className='showButton'  onClick={() => showMoreClick(element)}>{showMore ? "Show less" : "Show more"}</button>
        </p>
        </div>
        </div>
    </div>)
}))}
    </div>)
}
export default Description;