// components/UseCallbackHook.js
/* useCallback도 useMemo와 비슷하게 사용할 수 있다. 하지만 useCallback은 값 대신 함수를 메모화한다 */

import { useCallback, useEffect } from "react"
import { useAnyKeyToRender } from "../hooks/DeepEffect"

export default function UseCallbackHook(){
    useAnyKeyToRender()

    /* fn 함수는 useEffect의 의존 관계에 포함된다. 하지만 words와 마찬가지로 자바스크립트는 렌더링이 새로 될 때마다 이 함수가 서로 다른 함수라고 가정한다. 그에 따라 렌더링이 이뤄질 때마다 effect를 실행한다. 이로 인해 키가 눌릴 때마다 "fresh render"가 표시된다. 이런 상황은 의도한 상황이 아니다. */
    // const fn=()=>{
    //     console.log("hello")
    //     console.log("world")
    // }
    // useEffect(()=>{
    //     console.log("fresh render")
    //     fn()
    // },[fn])
    /* useCallback으로 함수를 감싸자 
    useCallback은 fn의 함수 값을 메모화한다. useMemo나 useEffect와 마찬가지로 useCallback도 두 번째 인자로 의존 관계 배열을 받는다. 여기서는 의존 관계 배열이 비어 있기 때문에 메모화된 콜백을 단 한 번만 만든다.
    */
    const fn=useCallback(()=>{
        console.log("hello")
        console.log("world")
    },[])
    useEffect(()=>{
        console.log("fresh render")
        fn()
    },[fn])

    return <h3>UseCallbackHook</h3>
}