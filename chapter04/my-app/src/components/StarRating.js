// src/components/StarRating.js

import { useState } from "react";
import  Star  from "./Star.js"

const createArray=length=>[...Array(length)]

/* 
  useState 훅이 반환하는 배열의 두 번째 요소는 상태 값을 변경할 때 쓸 수 있는 함수 
*/
export default function StarRating({totalStars=5}){
  const [selectedStars,setSelectedStars]=useState(3);
  return <>
      {createArray(totalStars).map((n,i)=>
        <Star 
        key={i} 
        selected={selectedStars>i}
        onSelect={()=>setSelectedStars(i+1)}
        />
        )}
      <p>{selectedStars} of {totalStars} stars</p>
    </>
  };
