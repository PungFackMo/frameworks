import Content from "./Content";
import {useState} from "react"
function App() {
  const [page,setPage]=useState("Home")

  return (
    <div className="App">
      <ul style={{cursor:"pointer"}}>
        <li onClick={()=>{setPage("Home")}}>Home</li>
        <li onClick={()=>{setPage("About")}}>About</li>
        <li onClick={()=>{setPage("Products")}}>Products</li>
      </ul>
      <Content page={page} />
    </div>
  );
}

export default App;