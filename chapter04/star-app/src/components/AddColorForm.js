// components/AddColorForm.js
/* 
    참조 사용하기
    리액트에서 폼 컴포넌트를 만들어야 할 때는 몇 가지 패턴을 사용할 수 있다. 이런 패턴 중에는 참조(ref)라는 리액트 기능을 사용해 직접 DOM에 접근하는 방법이 있습니다.
    리액트에서 참조는 컴포넌트의 생명주기(life cycle) 값을 저장하는 객체다.
    리액트는 참조를 제공할 때 쓸 수 있는 useRef 훅을 제공한다.
*/
/* 
    useRef 훅을 사용해 2가지 참조를 만든다. txtTitle 참조는 색의 이름을 수집하기 위해 폼에 추가한 텍스트 입력에 대한 참조에 쓰인다. hexColor 참조는 HTML 색 입력의 16진 색 값에 접근하기 위한 참조에 쓰인다. ref 속성을 사용하여 JSX에 참조의 값을 직접 설정 한다.
    AddColorForm은 DOM을 통해 폼 값을 저장하기 때문에 제어되지 않는 컴포넌트가 된다. 예를 들어 리액트 밖에서 폼에 접근해 폼에 속한 입력 값을 처리하고 싶을 때 사용될 수 있지만 제어가 되는 컴포넌트가 더 좋은 접근 방법이다.
*/

import {useRef} from "react"

export default function AddColorForm({onNewColor=f=>f}){
    const txtTitle=useRef()
    const hexColor=useRef()

    const submit=e=>{
        e.preventDefault()
        const title=txtTitle.current.value
        const color=hexColor.current.value
        onNewColor(title,color)
        txtTitle.current.value=""
        hexColor.current.value=""
    }

    return(
        <form onSubmit={submit}>
            <input ref={txtTitle} type="text" placeholder="color title..." required />
            <input ref={hexColor} type="color" />
            <button>ADD</button>
        </form>
    )
}