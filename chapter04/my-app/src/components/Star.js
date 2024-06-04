//components/Star.js
//npm install react-icons --save
import { FaStar } from "react-icons/fa";

/* 
  사용자가 아무 별이나 클릭할 수 있게 해야 한다.
  onClick 핸들러를 FaStar 컴포넌트에 추가해서 별을 클릭할 수 있게 만들어야 합니다.
  onClick 핸들러에 onSelect 라는 함수를 추가한다.
*/

const Star=({selected=false,onSelect=f=>f})=>{
    return (
        <FaStar 
            color={selected?"red":"gray"}
            size="3em" 
            onClick={onSelect}
            cursor="Pointer"
        />
    )
}


export default Star;