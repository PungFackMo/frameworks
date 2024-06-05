import { useState } from "react";
import  Star  from "./Star.js"

const createArray=length=>[...Array(length)]

export default function StarRating({totalStars=5, selectedStars=0}){
  return (
    <> {/* 왜 ...전개 연산자가 들어가지? */}
      {createArray(totalStars).map((n,i)=>
        <Star 
          key={i} 
          selected={selectedStars>i}
        />
      )}
      <p className="star-text">{selectedStars} of {totalStars} stars</p>
    </>
  )
  };
