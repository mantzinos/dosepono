import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
const https = require("https");


// const Sexy = () => {
// const url="https://api.openweathermap.org/data/2.5/weather?q=Kiato&appid=dbca5aa18abb48aaaa2d6476d86da148";
// let [aa, setaa] = useState("");
// https.get(url, function(response) {
  
//   console.log(response.statusCode);
//   response.on("data", data => {
//     const weatherData = JSON.parse(data)
//       console.log(weatherData)
//   //  setaa(weatherData.weather[0].id);
//     });
//   }
//  return (<h1>{aa}</h1>)
// }

// const Sexy = () => {
//   const [aa, setaa] = useState("poutsos");
//   const url="https://api.openweathermap.org/data/2.5/weather?q=Kiato&appid=dbca5aa18abb48aaaa2d6476d86da148";
//   https.get(url, response => {
//     console.log(response.statusCode);
//     response.on("data", data => {
//       const weatherData = JSON.parse(data);
//       console.log(weatherData);
//       setaa(weatherData.name);
//     })
//   })
//   return <h1>{aa}</h1>
// }

ReactDOM.render(
  <div>
  {/* <Sexy/> */}
  <h1>Sexy AF</h1>
  <App/>
  </div>,
  document.getElementById('root')
);

// db.products.insert(
//   {
//     _id: 3,
//     name: "Rubber",
//     price: 1.30,
//     stock: 43,
//     reviews: [
//       {
//         authorName: "Sally",
//         rating: 5,
//         review: "Best rubber ever!"
//       },
//       {
//         authorName: "John",
//         rating: 5,
//         review: "Awesome rubber!"
//       }
//     ]
//   }
// )
// db.products.updateOne({_id: 1}, {$set: {
//   reviews:[
//     {
//       authorName: "mitsos",
//       rating: 4,
//       review: "Best penn ever!"
//     },
//     {
//       authorName: "alekos",
//       rating: 2,
//       review: "Awesome pen!"
//     }
//   ]
// }})
// db.products.insertOne({
//   _id: 2,
//   name: "Pencil",
//   price: 0.80,
//   stock: 12,
//   review: [
//     {
//       authorName: "James",
//       rating: 5,
//       review: "Fantastic"
//     },
//     {
//       authorName: "Jono",
//       rating: 5,
//       review: "The best pencil I've used in my life."
//     }
//   ]
// })