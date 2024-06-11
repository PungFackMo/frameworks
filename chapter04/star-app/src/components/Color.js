import StarRating from "./StarRating"

/* 상호 작용을 컴포넌트 트리 위쪽으로 전달하기
    리스트에서 색을 제거하는 상호 작용
    리스트에 들어 있는 색의 평점을 변경하는 상호 작용
    자식 컴포넌트에 대해 별어진 상호작용을 수집해서 트리의 위로 올려 보내서 상태가 저장된 루트 컴포넌트에 도작하게 해야 된다.
*/
/* 각 색의 이름 옆에 해당 색을 제거하는 삭제 버튼을 덧붙인다. */
import { FaTrash } from "react-icons/fa";

export default function Color({id,title,color,rating,onRemove,onRate=f=>f}){
    return(
        <section>
            <h1>{title}</h1>
            <button onClick={()=>{onRemove(id)}}>
                <FaTrash />
            </button>
            <div style={{height:50, backgroundColor:color}}></div>
            <StarRating selectedStars={rating} onRate={rating=>onRate(id,rating)}/>
        </section>
    )
}