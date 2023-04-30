/**
 * The Mymodal function is a React component that displays a message and a button, and accepts a prop
 * to close the modal.
 * @returns The Mymodal component is being returned, which contains some text and a button.
 */
import React,{useState} from  'react';
function Mymodal({closemodal}){
//   const[showmodal,setShowmodal]= useState(false);
//   function closemodal(){
//     setShowmodal(false);
// }
    return(
        <>
        <div className='modal_wrapper' onClick={closemodal}></div>
        <div className='modal_container'>
          <h2>STAY TUNED</h2>
  <p>
    Subscribe to our newsletter and never miss our designs ,latest news.etc.
    Our newsletter is sent once a week, every Monday
  </p>
  <button className='model_btn' onClick={closemodal}>Accept It</button>
  </div>
        </>
    );
}
export default Mymodal;