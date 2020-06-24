import React, { useEffect, useState } from 'react'
import SoundtrackList from "./SoundtrackList"
const Soundtracks = () => {
  const [soundtracks, setSoundtracks] = useState([]);
    useEffect(() => {
      const NEW_URL = (`https://itunes.apple.com/search?term=movie&entity=song`);
      fetch(NEW_URL)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setSoundtracks(data.results);
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
         {soundtracks && (
        <SoundtrackList tracks={soundtracks} />
        )}
        
      </div>
    );
  };

export default Soundtracks;