// DependencyRelation.js

/* 2가지 서로 다른 상태 변수가 있는 코드 */
import {useState, useEffect} from "react"

export default function DependencyRelation(){
    const [val,set]=useState("")
    const [phrase,setPhrase]=useState("example phrase")

    const createPhrase=()=>{
        setPhrase(val)
        set("")
    }
    // useEffect(()=>{
    //     console.log(`typing "${val}"`)
    // })
    // useEffect(()=>{
    //     console.log(`saved phrase "${phrase}"`)
    // })
    /* 
    렌더링이 이뤄질 때마다 효과가 호출되는 것을 바라지는 않는다. useEffect훅을 구체적인 데이터 변경과 연동시킬 필요가 있다. 이 문제를 해결하기 위해 의존 관꼐 배열을 사용한다. 의존 관계 배열은 이펙트가 호출되는 시점을 제어한다.
    */
    useEffect(()=>{
        console.log(`typing "${val}"`)
    },[val])
    useEffect(()=>{
        console.log(`saved phrase "${phrase}"`)
    },[phrase])
    /* 
    첫 번째 효과는 val값이 바뀔 때만 호출된다. 두 번째 효과는 phrase값이 변경 될 때만 호출된다.
    입력에 문자를 타이핑해서 val값을 변경하면 첫 번째 효과만 발생한다. 버튼을 클릭하면 phrase가 저장되고 val은 ""로 재설정된다.
    */
    /* 의존 관계 배열의 여러 값을 검사할 수 있다. val이 변경되거나 phrase가 변경될 때마다 어떤 효과를 실행하고 싶다고 하자 */
    useEffect(()=>{
        console.log("either val or phrase has changed")
    },[val,phrase])
    /* useEffect의 두 번째 인자로 빈 배열을 넘길 수도 있다. 빈 의존 관계 배열은 초기 렌더링 직후 이펙트가 단 한번만 호출되게 한다. 
    배열에 의존 관계가 없기 때문에 효과는 초기 렌더링 직후에만 호출된다. 의존 관계가 없다는 말은 변경에 반응하지 않는다는 뜻이므로 효과가 결코 다시 호출되지 않는다. 최초 렌더링시에만 호출되는 효과는 특히 초기화에 아주 유용하게 쓰일 수 있다.*/
    useEffect(()=>{
        console.log("only once after initial render")
    },[])
    /* 어떤 useEffect가 함수를 반환하면 컴포넌트가 트리에서 제거될 때 이 함수를 호출된다. 
    useEffect를 컴포넌트의 생성과 제거에 사용할 수 있다는 뜻이다. 빈 배열은 최초 렌더링시 환영한다는 벨소리가 한 번만 플레이 된다는 뜻이다. 그 후에는 컴포넌트가 트리에서 제거될 때 이별의 벨소리를 울리는 함수를 반환한다.*/
    const welcomeChimePlay=()=>{
        console.log("환영의 벨소리 울린다.")
    }
    const goodbyeChimePlay=()=>{
        console.log("이별의 벨소리가 울린다.")
    }
    useEffect(()=>{
        welcomeChimePlay()
        return ()=>goodbyeChimePlay()
    },[])

    return (
        <>
            <label>Favorite phrase:</label>
            <input 
                value={val}
                placeholder={phrase}
                onChange={e=>set(e.target.value)}
            />
            <button onClick={createPhrase}>send</button>
        </>
    )
};