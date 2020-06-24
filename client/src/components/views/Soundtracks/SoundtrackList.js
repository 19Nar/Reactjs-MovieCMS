import React from "react";

const SoundtrackList = (props) => {
  console.log("Soundtracklist", props);
  return (
    <>
     <h1>Movie Soundtracks</h1>
      <ul>
        {props.tracks.map((track) => (
          <li key={track.trackId}>
            <p>Artist's Name: {track.artistName}</p>
            <p>See: <a href="">{track.artistViewUrl}</a></p>
            <p>Collection's Name: {track.collectionName}</p>
            <p>See: <a href="">{track.collectionViewUrl}</a></p>
            <p>Released Date: {track.releaseDate}</p>
            <p>Country: {track.country}</p>
            <p>Track Name: {track.trackName}</p>
            <p>Track Price: {track.trackPrice}{track.currency}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SoundtrackList;
