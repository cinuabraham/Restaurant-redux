import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function RestReview(props) {
  const review = props.review
  console.log(review);
  

  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)} className='btn btn-warning'>Click Here to View the Review</button>
         
     <Collapse in={open}>
    
        <div>
       { review.map((item)=>(<>
        <hr />
          <h6>{item.name} : {item.date}</h6>
          <p>Rating : {item.rating}</p>
          <p>Comment : {item.comments}</p>
       </>))
          }
        </div>
     </Collapse>
      </>
  )
}

export default RestReview