import React, { useEffect, useState } from 'react'
import BestsellersList from "./BestsellersList"

function Bestsellers() {
    const [bestsellers, setBestsellers] = useState([]);
    useEffect(() => {
      const NEW_URL = (`https://itunes.apple.com/search?term=movie&entity=album`);
      fetch(NEW_URL)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setBestsellers(data.results);
        })
        .catch(e => console.log(e)) 
        }, []);

    return (
        <div
        style={{
          width: "85%",
          height: "100%",
          padding: "20px",
          margin: "1rem auto",
          background: "lightgrey",
          
        }}
      >
         {bestsellers && (
        <BestsellersList sellers={bestsellers} />
        )}
        
      </div>
    );
  };

export default Bestsellers
