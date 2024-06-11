// src/components/ColorListContextHook.js
import {useColors} from "../ColorProvider"
import Color from "./Color"
import ColorWithContext from "./ColorWithContext"

export default function ColorListContextHook(){
    const {colors}=useColors()
    // const colorsArr=colors.colors
    if(!colors.length) return <div>No Colors Listed. (Add a Color)</div>
    return (
        <div className="color-list">
            {
                colors.map(color=><ColorWithContext key={color.id} {...color} />)
            }
        </div>
    )
}