import React, { useState } from 'react'
import "./Cards.css";
import { Card } from './Card';
export const Cards = (props) => {
  let courses=props.courses;
  let category=props.category;
  const [likedcourses,setLikedcourses]=useState([]);
  function getcourses(){
    if(category==="All"){
      let allcourses=[];
      Object.values(courses).forEach(array =>{
        array.forEach(courseData =>{
             allcourses.push(courseData);
        })
      })
      console.log(allcourses);
      return allcourses;
    }
    else{
      return courses[category];
    }
   
  }
  

  return (
    <div className='cards'>
       {getcourses().map((course)=>{
           return <Card key={course.id} course={course} likedcourses={likedcourses} setLikedcourses={setLikedcourses}/>
       })}
    </div>
  )
}