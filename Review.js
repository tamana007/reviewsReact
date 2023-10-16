import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

const Review = () => {

  return (<><h2>review component</h2>;
  {reviews.map((item)=>{
    return(
      <div className='review'>{item.name}</div>
    )
  })}
  <button className='remove-btn'>add</button>
  
  </>)
};

export default Review;
