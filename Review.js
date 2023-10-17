import React, { useState,useEffect } from 'react';
// import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

const Review = () => {

  const [people,setPeople]=useState(0)
  const {id,name,job,image,text}=reviews[people];



  // function changeReview(){

  // const checkPerson=(number)=>{
  //   if(number>reviews.length-1){
  //     return 0;
  //   }
  //   else if(number<0)
  // return reviews.le}
  // }
  const checkPerson=(number)=>{
    if(number>reviews.length-1){
      return 0;
    }
    if(number<0){
      return reviews.length-1
    }
    return number;


  }

  const  nextBtn=()=>{
    setPeople((people)=>{
      let newPeople=people+1;
      // console.log(newPeople);
      return checkPerson(newPeople);
      
    });

  }
  let prevBtn=()=>{
    setPeople((people)=>{
      let nextPeople=people-1;
      return checkPerson(nextPeople);
    })
  }
  const randomBtn=()=>{
  //  setPeople(Math.floor(Math.random*reviews.length-1))
  let random =Math.floor(Math.random()*reviews.length-1)
  setPeople (checkPerson(people+random));
  // console.log(random);
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
      <button className='prev-btn' onClick={prevBtn}>{<FaChevronLeft/>}</button>
      <button className='prev-btn' onClick={nextBtn}>{<FaChevronRight/>}</button>
    </div>
    <div>
      <button onClick={randomBtn}>Surprise me</button>
    </div>
    {/* <button onClick={changeReview}>click me</button> */}

  </article>
  
  )
};

export default Review;
