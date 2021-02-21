import React from "react";
import atoma from "../atoma";
import Card from "./Card";


        
const App = () => (
    <div>
    {atoma.map(atomo => (
        <Card
        key={atomo.id}
        name={atomo.name}
        image={atomo.picture}
        idiotis={atomo.idiotis}
        />))}
        </div>)

console.log(atoma);
      


export default App;