// componets/hooks/hooks.js
import {useState} from "react"

/* 
    이 훅은 커스텀 훅이다.
    배열의 첫 번째 원소는 앞에서 복사해 붙여넣고 싶었던 속성들이다. 배열의 두 번째 원소는 value의 값을 초깃값으로 재설정할 때 쓸 함수다.
*/
export const useInput=initialValue=>{
    const [value,setValue]=useState(initialValue)
    return [
        {value,onChange:e=>setValue(e.target.value)},
        ()=>setValue(initialValue)
    ]
}