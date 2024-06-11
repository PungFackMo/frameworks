// components/Checkbox.js
/* useEffect 소개
    렌더링은 앱이 처음 적재될 때 일어나고, 프롭이나 상태 값이 변경될 때도 일어 난다. 하지만 렌더링이 끝난 다음에 무언가를 하고 싶은 경우에는 useEffect 훅을 사용합니다.
*/
/* 
    useState와 checkd의 값을 변경해주는 함수 setChecked를 사용해 checked 값을 설정한다. 사용자는 박스를 체크하거나 체크를 해제 할 수 있다. 하지만 박스가 체크된 다음에 사용자에게 알림창을 띄워야 한다면 어떻게 해야 할까?
*/
import {useState, useEffect} from "react"

export default function Checkbox(){
    const [checked,setChecked]=useState(false)
    /* 
        이 코드에서는 alert를 렌더러 직전에 삽입해서 렌더러를 블록한다. 사용자가 알림 창의 OK 버튼을 클릭하기 전에는 컴포넌트가 렌더링되지 않는다. alert이 블러킹 함수이기 때문에 OK를 누르기 전에는 체크박스의 다음 상태가 렌더링된 모습을 볼 수 없다.
    */
    // alert(`checked:${checked.toString()}`)
    /* 
    우리가 바라는 대로 alert을 볼 수 있으려면 useEffect를 사용할 수 있다. 
    useEffect 함수 안에 alert를 넣는다는 것은 이 함수를 렌더러가 렌더링을 한 직후에 부수 효과(side effect)로 실행한다는 뜻이다.
    */
    // useEffect(()=>{
    //     alert(`checked:${checked.toString()}`)
    // })
    /* 
    렌더가 부수효과로 무언가를 수행하게 하고 싶을 때 useEffect를 사용한다.
    Checkbox 함수는 UI를 렌더링한다. 하지만 컴포넌트가 렌더링 외에 다른 일을 하길 원한다. UI렌더링 외에 컴포넌트가 수행해야 하는 일을 효과(effect)라고 부른다.
    alert, console.log, 브라우저나 네이티브 API와의 상호작용은 렌더링에 속하지 않는다. 이들은 컴포넌트 함수의 반환값에 포함되지 않는다. useEffect를 사용하면 렌더링이 끝나기를 기다렸다가 alert이나 console.log등에 값을 제공할 수 있다.
    */
    useEffect(()=>{
        console.log(checked?"Yes, checked":"No, not checked")
    })
    /* 
    useEffect는 렌더링된 프롭, 상태, 참조 등의 최종 값에 접근할 수 있다.
    useEffect를 렌더링이 끝난 다음에 발생하는 함수라고 생각하자.
    */
    return (
        <>
            <input 
                type="checkbox"
                value={checked}
                onChange={()=>setChecked(checked=>!checked)}
            />
            {checked?"checked":"not checked"}
        </>
    )
    /* 
        return문 뒤에 있는 코드는 결코 실행이 되지 못하므로 alert을 return 다음에 넣을 수는 없다.
    */
    // alert(`checked:${checked.toString()}`)
}