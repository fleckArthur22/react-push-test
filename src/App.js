import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./Search";
import { dblClick } from "@testing-library/user-event/dist/click";

function App() {
  const [poki, setPoki] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/10")
      .then((res) => setPoki([res.data]));
  }, []);

  console.log(poki);

  return (
    <div className="App">
      <Search />
      {poki.map((pok, index) => {
        return (
          <div className="card" key={index}>
            <img src={pok.sprites.back_default} alt="" />
            <p>{pok.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
