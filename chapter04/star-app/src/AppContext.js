// src/AppContext.js

import AddColorCustom from "./components/AddColorCustom";
import AddColorWithContext from "./components/AddColorWithContext";
import ColorListContext from "./components/ColorListContext";
import ColorListContextHook from "./components/ColorListContextHook";

export default function AppContext(){
    return (
        <>
            <AddColorWithContext />
            <ColorListContextHook />
        </>
    )
}