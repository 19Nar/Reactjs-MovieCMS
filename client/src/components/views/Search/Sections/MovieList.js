import React from "react";
import { Row, Col } from "antd";
import { Descriptions } from "antd";

//import { Descriptions } from "antd"
const MovieList = (props) => {
  const movies = props.Search;

  return (
    <div>
      <hr />
      <Row gutter={[16, 16]}>
        {movies &&
          movies.map((movie, index) => (
            <React.Fragment key={index}>
              <Col lg={6} md={8} xs={24}>
                <div style={{ position: "relative" }}>
                <a href={movie.Poster}><img src={movie.Poster}  style={{ width: "100%", height: "400px" }}alt=""/> 
                <Descriptions>
                      <Descriptions.Item label="Released Year"> {movie.Year}</Descriptions.Item>
                    </Descriptions>
                  </a>
                </div>
              </Col>
            </React.Fragment>
          ))}
      </Row>
    </div>
  );
};

//<>

export default MovieList;
