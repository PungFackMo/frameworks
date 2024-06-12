//components/Cat2.js
/* mome함수를 사용하면 프로퍼티가 변경될 때만 다시 렌더링되는 컴포넌트를 만들 수 있다. */

import {useState,memo} from "react"

const Cat2=({name})=>{
    console.log(`rendering ${name}`)
    return <p>{name}</p>
}
/* PureCat이라는 새 컴포넌트를 만든다. PureCat은 프로퍼티가 변경됐을 때만 Cat을 다시 렌더링하게 해준다. */
const PureCat = memo(Cat2)

export default PureCat