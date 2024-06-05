import { useState } from "react";
import  Star  from "./Star.js"

const createArray=length=>[...Array(length)]

/* 상태가 없는 컴포넌트를 순수 컴포넌트라고 합니다 */

export default function StarRating({totalStars=5, selectedStars=0, onRate=f=>f}){
  return (
    <> {/* 왜 ...전개 연산자가 들어가지? */}
      {createArray(totalStars).map((n,i)=>
        <Star 
          key={i} 
          selected={selectedStars>i}
          onSelect={()=>{onRate(i+1)}} /* 왜 클릭이(onClick)이 아니고 셀렉인지? */
        />
      )}
      <p className="star-text">{selectedStars} of {totalStars} stars</p>
    </>
  )
  };
