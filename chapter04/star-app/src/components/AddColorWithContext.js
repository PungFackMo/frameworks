// components/AddColorWithContext.js

import { useColors } from "../ColorProvider"
import { useInput } from "./hooks/hooks"
/* 
    이 컴포넌트는 addColor함수를 통해 색을 직접 추가할 수 있다. 색이 추가되거나 색에 평점이 메겨지거나, 색이 제거되면 콘텍스트의 colors 값 상태가 바뀐다. 이렇게 상태가 바뀌면 ColorProvider의 자식들은 새 콘텍스트 데이터를 가지고 다시 렌더링된다.
*/
export default function AddColorWithContext(){
    const [titleProps,resetTitle]=useInput("")
    const [colorProps,resetColor]=useInput("#000000")
    const {addColor} = useColors()

    const submit=e=>{
        e.preventDefault()
        addColor(titleProps.value,colorProps.value)
        resetTitle()
        resetColor()
    }

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input
                {...colorProps}
                type="color"
                required
            />
            <button>ADD</button>
        </form>
    )
}