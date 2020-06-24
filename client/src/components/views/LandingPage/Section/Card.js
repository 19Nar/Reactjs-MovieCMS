import React from "react"
import { Col } from "antd";

const Card = (props) => {
    return (
        <Col  lg={6} md={8} xs={24}>
            <div style={{ 
                position: "relative"
                }}>
                <a href={`/movie/${props.movieID}`}>
                    <img style={{ width: "100%", height: "400px" }} alt="img" src={props.image} />
                </a>
            </div>
        </Col>
    )
}

export default Card