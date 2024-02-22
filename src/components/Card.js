import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Card.css";

export const Card = (props) => {
  let course = props.course;
  let likedcourses=props.likedcourses;
  let setLikedcourses=props.setLikedcourses;
  let description=`${props.course.description.substr(0,150)}...`;
  function clickhandler(){
    if(likedcourses.includes(course.id)){
      setLikedcourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
      toast.warning("Liked removed");
    }

    else{
      if(likedcourses.length===0){
        setLikedcourses([course.id]);
      }
      else{
        setLikedcourses((prev)=>[...prev,course.id]);
      }
      toast.success("Liked successfully");
    }

  }
  return (
    <div className="card-box">
      <div className="card-img">
        <img src={course.image.url} />
      </div>
      <div>
        <button className="like" onClick={clickhandler}>
          {(likedcourses.includes(course.id))?<FcLike />:<FcLikePlaceholder/>}
        </button>
      </div>
      <div>
        <h2> {course.title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};