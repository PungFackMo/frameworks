// components/Cat.js
/* 컴포넌트 성능 개선 
    리액트 애플리케이션에서는 컴포넌트가 일반적으로 아주 많이 렌더링된다. 불필요한 렌더링을 피하고 렌더링이 전파되는데 걸리는 시간을 줄이는 등의 활동이 성능 개선에 포함된다. 리액트는 불필요한 렌더링을 방지할 때 도움이 되는 memo, useMemo, useCallback등의 도구를 제공한다. useMemo와 userCallback을 활용해서 웹사이트의 성능을 더 좋게 만드는 방법을 알아 보자.
*/
/* 순수한 컴포넌트를 만들 때 memo함수가 쓰인다. 리액트에서 순수 컴포넌트는 같은 프로퍼티에 대해 항상 같은 출력으로 렌더링되는 컴포넌트를 말한다. */

const Cat=({name})=>{
    console.log(`rendering ${name}`)
    return <p>{name}</p>
}

export default Cat