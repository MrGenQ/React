import { Card } from "react-bootstrap"
const About = () =>{
    return(
        <Card>
        <Card.Header>About project</Card.Header>
        <Card.Body>
            <Card.Title>IMDB Movies Api service</Card.Title>
            <Card.Text>
            <a href="https://imdb-api.com/api#Search-header">IMDB API Documentation</a>
            </Card.Text>
        </Card.Body>
        </Card>
    )
}
export default About