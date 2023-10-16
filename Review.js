import React, { useState,useEffect } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

const Review = () => {

  const [people,setPeople]=useState(1)
  const {id,name,job,image,text}=reviews[people];



  // function changeReview(){

  let prevBtn=()=>{
    // for(let i=0;i<reviews.length;i--){
    //   setPeople(reviews[i].id)
    // }
    // const result=people+1;
    setPeople((people)=>{
      let newPeople=people+1;
      return newPeople;
    });

  }
    
  
  console.log(people);

  return (<article className='review'>
    <div className='img-container'>
      <img className='person-img' src={image}></img>
      <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
    </div>
    <div className='author'>{name}</div>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='btn-container'>
      <button className='prev-btn'>{<FaChevronLeft/>}</button>
      <button className='prev-btn' onClick={prevBtn}>{<FaChevronRight/>}</button>
    </div>
    {/* <button onClick={changeReview}>click me</button> */}

  </article>
  
  )
};

export default Review;
