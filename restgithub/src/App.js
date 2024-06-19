import './App.css';
import { useState } from "react";



function App() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const fetchData=()=>{
    // console.log(keyword)
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
      .then(response=>response.json())
      .then(result=>setData(result.items))
      .catch(err=>console.error(err))
  }
  return (
    <div className="App">
      <input
        value={keyword}
        onChange={e=>setKeyword(e.target.value)}
      />
      <button onClick={fetchData}>Fetch</button>
      <table>
        <tbody>
          {data.map(repo=>
            <tr>
              <td>{repo.full_name}</td>
              <td>{repo.html_url}</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
