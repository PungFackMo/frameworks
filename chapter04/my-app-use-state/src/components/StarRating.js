// src/components/StarRating.js

import { useState } from "react";
import  Star  from "./Star.js"

const createArray=length=>[...Array(length)]

/* 
  useState 훅이 반환하는 배열의 두 번째 요소는 상태 값을 변경할 때 쓸 수 있는 함수 
  훅이 걸린 컴포넌트를 랜더러와 연동시킨다는 점이다
  setSelectedStars 함수를 사용해 selectedStars의 값을 바꿀 때 마다 StarRating함수 컴포넌트가 훅에 의해 다시 호출되면서 렌더링이 다시 이뤄진다.
  훅이 걸린 데이터가 변경되면 데이터에 대한 훅이 걸린 컴포넌트에 새 값을 전달하면서 컴포넌트를 다시 렌더링해준다.
*/
export default function StarRating({totalStars=5}){
  const [selectedStars,setSelectedStars]=useState(3);
  //selectedStars=5 -> 오류가 발생이 되고 화면 갱신도 되지 않습니다.
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
