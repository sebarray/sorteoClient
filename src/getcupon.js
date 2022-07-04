import React, { useState } from "react";
import './App.css';




  const Getcupon=()=> {
    const [sorteo, setSorteo] = useState("");


    const getc=()=>{

        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "ip": "192.197.0.107"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://sebarray-sorteo.herokuapp.com/cupon", requestOptions)
  .then(response => response.text())
  .then(result => setSorteo(result))
  .catch(error => console.log('error', error));
    }


    return (
        <div>
         <button onClick={getc}>obtener cupon</button>
         <div>
         {sorteo!==""?
        <div>
            
          <p>{sorteo}
          </p> 
         </div>:
          <p>presione ppara optener el cupon</p>
         }
         </div>
            <p></p>
        </div>
      );
};

export default Getcupon;