import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_URL } from "../../Config"
import { useParams } from 'react-router-dom'
import Body from "./../LandingPage/Section/Body"
import { Descriptions } from "antd"



const MovieDescriptionPage = (props) => {

    const [item, setMovies] = useState([])
    let { movieId } = useParams();
    useEffect(() => {

        fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovies(data)
                console.log("singleobj", data)
            })

    }, [props])
    return (

        <div style={{ width: "100%", margin: 0}}>
            {item &&
                <Body
                    image={`${IMAGE_URL}w1280${item.backdrop_path}`}
                    title={item.original_title}
                    text={item.overview}
                />
            }

            <Descriptions style={{ width: "70%", margin: "5px", background: "#F5F5F5", padding: "10px" }} title="More Info">
                <Descriptions.Item label="Release Date">{item.release_date}</Descriptions.Item>
                <Descriptions.Item label="Language">{item.original_language}</Descriptions.Item>
                <Descriptions.Item label="Popularity">{item.popularity}</Descriptions.Item>
                <Descriptions.Item label="Average Votes">{item.vote_average}</Descriptions.Item>
                <Descriptions.Item label="All Votes">{item.vote_count}</Descriptions.Item>
            </Descriptions>

        </div>
    )
    
}

export default MovieDescriptionPage

