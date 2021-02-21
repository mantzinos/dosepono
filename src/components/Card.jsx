import React from "react";

const Card = (props) => (
    <div>
    <h1>{props.name}</h1>
    <img src={props.image}></img>
    <p>{props.idiotis}</p>
    </div>

)


export default Card;