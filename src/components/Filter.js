import React from 'react'
import "./Filter.css";
export const Filter = (props) => {
  let category=props.category;
  let setcategory=props.setcategory;
  function filterdata(title){
    setcategory(title);
  }
  return (
    <div className='filter'>{
      props.data.map((data)=>{
        return <button onClick={()=>filterdata(data.title)}>{data.title}</button>
      })}
    </div>
  )
}