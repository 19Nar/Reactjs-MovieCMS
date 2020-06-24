import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_URL } from "../../Config";
import { Typography, Row } from "antd";
import Body from "./Section/Body";
import Card from "./Section/Card";
const { Title } = Typography;

const LandingPage = () => {
  const [AllMovies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=5`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies(response.results);
      });
  }, []);
  return (
    <div style={{ width: "100%", margin: 0 }}>
      {AllMovies[0] && (
        <Body
          image={`${IMAGE_URL}w1280${AllMovies[0].backdrop_path}`}
          title={AllMovies[0].original_title}
          text={AllMovies[0].overview}
        />
      )}
      {/* Making the Latest Movies part */}
      <Title
        style={{
          margin: "10px",
          color: "white",
          background: "black",
          padding: "10px",
        }}
        level={1}
      >
        {" "}
        Most Watched Movies
      </Title>

      <div
        style={{ width: "85%", margin: "1rem auto", background: "rgb(0,0,0)" }}
      >
        <hr />
        <Row gutter={[16, 16]}>
          {AllMovies &&
            AllMovies.map((movies, index) => (
              <React.Fragment key={index}>
                <Card
                  image={
                    movies.poster_path &&
                    `${IMAGE_URL}w500${movies.poster_path}`
                  }
                  movieID={movies.id}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default LandingPage;
