//src/App5.js
import {useState} from "react"
import PureCat from "./components/Cat2"
/* 이제 새 고양이 이름을 추가하면 콘솔에서 추가된 PureCat컴포넌트만 렌더링 된다. */
export default function App5(){
    const [cats,setCats]=useState(["Biscuit","Jungle","Outlaw"])
    return (
        <>
            {
                cats.map((name,i)=>
                    <PureCat key={i} name={name}/>)
            }
            <button onClick={()=>setCats([...cats,prompt("Name a cat")])}>Add a Cat</button>
        </>
    )
}