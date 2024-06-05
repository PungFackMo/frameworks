//src/components/ColorList.js
import Color from "./Color"

// function onRemoveColor(id){
//     console.log("ColorList onRemoveColor Called",id)
// }


export default function ColorList(
    {colors=[],onRemoveColor}
){
    if(!colors.length)
        return <div>표시할 색이 없습니다.</div>
    return (
        <div>
            {colors.map((color)=>(
                <Color 
                    key={color.id} 
                    {...color} 
                    onRemove={onRemoveColor}
                />
            ))}
        </div>
    )
}