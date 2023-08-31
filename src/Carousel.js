import { useState } from 'react';
import { data } from './data';
import './App.css';

function Carousel(){
const [photo, setPhoto] = useState(0);
const {id, image} = data[photo];

const nextPhoto = () => {
  setPhoto((photo => {
  photo++;
  if(photo > data.length -1){
    photo = 0;
  }
  return photo;
  }))
  }
  
  const previousPhoto = () => {
  setPhoto((photo => {
  photo--;
  if(photo < 0){
  return data.length -1;
  }
  return photo;
  }))
  }

return(<div>
  <div className='container one title'>
  <h1>Courses we offer:</h1>
  </div>

  <div className='container one title'>
    <button onClick={previousPhoto} className='btn previous'>Previous</button>
  

  <div className='position'>
    <img src={image} width="700px" height="465px" alt='illustration' />
    <h2>{id}</h2>
  </div>

  <button onClick={nextPhoto} className='btn next'>Next</button>
    
   </div>


</div>)
      
    
  
}

export default Carousel;
