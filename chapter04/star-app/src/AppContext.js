// src/AppContext.js

import AddColorCustom from "./components/AddColorCustom";
import ColorListContext from "./components/ColorListContext";
import ColorListContextHook from "./components/ColorListContextHook";

export default function AppContext(){
    return (
        <>
            <AddColorCustom />
            <ColorListContextHook />
        </>
    )
}