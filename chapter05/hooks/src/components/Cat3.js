//components/Cat3.js
import {memo} from "react"
/* name 프로퍼티가 동일한데도 Cat이 매번 다시 렌더링된다. 이유는 meow프로퍼티 때문이다. meow 프로퍼티는 함수로 정의할 때마다 새로운 함수가 생긴다. 리액트 입장에서는 meow프로퍼티가 변경됐기 때문에 컴포넌트를 다시 렌더링해야 한다. */
const Cat3=({name,meow=f=>f})=>{
        console.log(`rendering ${name}`)
        return <p onClick={()=>meow(name)}>{name}</p>
    }

const RenderCatOnce=memo(Cat3,()=>true)
const AlwayRenderCat=memo(Cat3,()=>false)
/* memo함수에 전달되는 두 번째 인자는 술어(predicate)이다. 술어는 항상 true나 false를 반환하는 함수다. 이 함수는 고양이를 렌더링할지 여부를 결정한다. 이 술어 함수가 false를 반환하면 Cat이 다시 렌더링된다. 이 함수가 true를 반환하면 Cat이 다시 렌더링 되지 않는다. 이 삼수가 어떤 값을 반환하더라도 Cat은 최소한 한번은 렌더링된다. 보통 술어 함수는 실제 값을 검사해 true/false를 반환한다. */
/* 술어는 이전 프로퍼티와 다음 프로퍼티를 인자로 받는다. 이 두 객체의 name프로퍼티를 비교할 수 있다. name이 바뀌면 컴포넌트를 다시 렌더링한다. name이 같으면 리액트가 meow프로퍼티가 변경됐는지 여부를 어떻게 판단하는지와 관계없이 컴포넌트가 다시 렌더링되지 않는다. */
const PureCat3=memo(Cat3,(prevProps,nextProps)=>prevProps.name===nextProps.name)

export default PureCat3