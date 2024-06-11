// src/App3.js

/* useLayoutEffect를 사용해야 하는 경우
렌더링 사이클의 이벤트가 발생하는 순서
1 렌더링 발동
2 useLayoutEffect가 호출됨
3 브라우저 화면 그리기 : 이 시점에 컴포넌트에 해당하는 엘리먼트가 실제로 DOM에 추가됨
4 useEffect가 호출됨
*/
import { useEffect,useLayoutEffect } from "react"
import UseWindowSize from "./components/UseWindowSize"
import UseMousePosition from "./components/UseMousePosition"
function App3(){
    // useEffect(()=>console.log("useEffect"))
    // useLayoutEffect(()=>console.log("useLayoutEffect"))
    // return <div>ready</div>
    return <UseMousePosition />
}
/* App3 컴포넌에서는 useEffect가 첫 번째 훅이고, 그후 useLayoutEffect이 발생한다. 하지만 로그를 보면 useLayoutEffect가 useEffect보다 먼저 발생했음을 알 수 있다.
useLayoutEffect는 렌더링 다음에 호출되지만 브라우저가 변경 내역을 화면에 그리기 전에 호출된다. 대부분의 경우 useEffect로 원하는 작업을 수행하기에 충분하겠지만, 여러분이 사용하는 Effect가 브라우저 화면 그리기(UI요소의 모양을 화면에 표시함)에 필수적인 경우에는 useLayoutEffect를 사용하고 하면 된다. */

export default App3