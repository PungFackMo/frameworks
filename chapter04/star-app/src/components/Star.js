import { FaStar } from "react-icons/fa";

const Star=({selected=false,onSelect=f=>f})=>{
    return (
        <FaStar 
            color={selected?"red":"gray"}
            onClick={onSelect}
            cursor="Pointer"
        />
    )
}


export default Star;