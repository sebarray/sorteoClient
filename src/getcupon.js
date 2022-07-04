import React, { useState } from "react";
import './button.scss';
import"./load.css"



  const Getcupon=()=> {
    const [sorteo, setSorteo] = useState('');
    const [clic, setclic] = useState(true);

    const getc=()=>{

      setclic(false)
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
  .then(result =>{ 
     setSorteo(result)
    setTimeout(setclic(true),10000)
  })
  .catch(error => console.log('error', error));
    }


    return (
        <div>
         <div className="button2"  id="b" onClick={getc}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  obtener cupon
</div>
         <div>
         {sorteo==='' && clic===true?
         <></>
         :
         !clic?
         <span class="loader">Load&nbsp;ng</span>
         :
          <p>{sorteo}</p> 
         
         
          
         }
         </div>
            <p></p>
        </div>
      );
};

export default Getcupon;