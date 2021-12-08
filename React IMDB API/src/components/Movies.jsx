import React,{useState} from "react"
import { Card } from "react-bootstrap"
const Movies = () => {
    let [searchMovies, setSearchMovie] = useState([])
    
    const url = "https://www.omdbapi.com/?t=";
    const key = "c9d4de65";
    const searchFor = (searchValue) =>{
        fetch(`${url}${searchValue}&apikey=${key}`)
        .then(response => response.json())
        .then(result => setSearchMovie(result))
    }
    return(
        <>
            <input type="text" placeholder="Movie title" onChange={e => {
                searchFor(e.target.value)
                console.log(searchMovies)
                }}>
            </input>
            {(searchMovies.length !== 0)?(<Card style={{width: '30rem'}}>
                <Card.Header>{searchMovies.Title}</Card.Header>
                <Card.Body>
                    <Card.Title> Year: {searchMovies.Year}</Card.Title>
                    <Card.Text>
                    <img alt="poster" width="400" height="480" src={searchMovies.Poster}/>
                    </Card.Text>
                </Card.Body>
            </Card>)
            :(<Card style={{width: '18rem'}}>
            <Card.Header>Search</Card.Header>
            </Card>)}
        </>
    )
}
export default Movies