// components/UseWindowSize.js
/* 창의 크기가 바뀐 경우 엘리먼트의 너비와 높이를 얻고 싶은 경우 */
import {useState, useLayoutEffect} from "react"
export default function UseWindowSize(){
    const [width,setWidth]=useState(0)
    const [height,setHeight]=useState(0)

    const resize=()=>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useLayoutEffect(()=>{
        window.addEventListener("resize",resize)
        return ()=>window.removeEventListener("resize",resize)
    })

    return <h1>{width}, {height}</h1>
}