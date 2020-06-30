import React from 'react'

function BestsellersList(props) {
    console.log("Bestsellerslist", props);
    return (
<>
     <h1>Movie Bestsellers</h1>
      <ul>
        {props.sellers.map((album) => (
          <li key={album.collectionId}>
            <p>Name: {album.artistName}</p>
            <p>See: <a href={album.artistViewUrl}>{album.artistName}</a></p>
            <p>Collection's Name: {album.collectionName}</p>
            <p>See: <a href={album.collectionViewUrl}>{album.collectionName}</a></p>
            <p>Released Date: {album.releaseDate}</p>
            <p>Country: {album.country}</p>
            <p>Collection Name: {album.collectionName}</p>
            <p>Price: {album.collectionPrice}{album.currency}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BestsellersList
