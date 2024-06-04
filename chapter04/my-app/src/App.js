/* 리액트 상태 관리
  상태(state)
  상태가 있는 컴포넌트를 만드는 방법을 배우고, 컴포넌트 트리의 아래 방향으로 상태를 전달하는 방법과 사용자 상호작용을 컴포넌트 트리의 위쪽으로 올려 보내는 방법을 살펴 본다.
*/
/* 별점 컴포넌트 만들기 
  5점 만점의 별점 시스템
  먼저 별이 필요하다.
*/
import { FaStar } from "react-icons/fa";
/* import { FaDove, FaEvernote } from "react-icons/fa"; */
import { useState } from "react";

/* 
  점수에 따라 선택된 별은 빨간색으로 칠해져야 하고, 선택되지 못한 별은 회색으로 표시되야 한다.
  선택된 속성에 따라 자동으로 별을 만들어내는 컴포넌트를 하나 만들자.
*/

const Star=({selected=false})=>{
  return <FaStar color={selected?"red":"gray"} size="10em" />;
};
/* 
  10점 별점 시스템이 훨씬 더 자세한 정보를 제공할 수 있다.
*/

// 인자로 전달된 갯수 만큼 배열을 생성하는 함수
const createArray=length=>[...Array(length)]

/* 
  사용자가 선택한 별의 개수는 별점을 표현한다
  사용자가 선택한 별점을 저장하는 selectedStars라는 상태 변수를 만들 것이다. useState 훅을 StarRating 컴포넌트에 직접 추가해서 변수를 만든다.
*/
function StarRating({totalStars=5}){
  /* useState 훅은 배열을 반환하는 호출 가능한 함수다 
    이 배열의 첫 번째 값이 우리가 사용하려는 상태 변수다.
    여기서는 이 변수가 selectedStars이고, 이 변수의 값은 StarRating에서 빨간색으로 칠해야 하는 별의 개수다.
    useState는 배열을 반환한다. 배열 구조 분해를 활용하면 쉽게 상태 변수에 이름을 붙일 수 있다.
    useState 함수에 전달하는 값은 상태 변수의 디폴트 값이다.
    여기서는 selectedStars의 초깃값이 3으로 설정된다.
  */
  // const selectedStars=useState(3)[0];


  const [selectedStars]=useState(3);
  return <>
    {createArray(totalStars).map((n,i)=><Star key={i} selected={selectedStars>i}/>)}
    <p>{selectedStars} of {totalStars} stars</p>
  </>
};
/* 
  사용자가 별을 클릭해서 점수를 바꿀 수 있도록 해야 한다.
  이 점수 값은 리액트 상에 이 값을 저장하고 변경해야 한다.
  상태를 리액트 함수 컴포넌트 넣을 때는 훅스(Hooks)하고 부르는 리액트 기능을 사용한다.
  훅스에는 컴포넌트 트리와 별도로 재사용 가능한 코드 로직이 들어 있다. 훅스를 사용하면 우리가 만든 컴포넌트에 기능을 끼워 넣을 수 있다. 리액트는 몇 가지 훅을 기본 제공하므로, 즉시 이런 훅을 사용할 수 있다.
  상태를 리액트 컴포넌트에 추가하고 싶을 때 사용할 수 있는 리액트 useState훅이다. 이 훅은 실제로는 react패키지에 들어 있다. 따라서 react 패키지를 임포트하기만 하면 된다.
*/
function App() {
  return (
    <div className="App">
      <div>
        <StarRating />
      </div>
      {/* <div>
        <StarRating totalStars={10}/>
      </div>
      <div>
        <FaDove /><FaEvernote />
      </div> */}
    </div>
  );
}

export default App;
