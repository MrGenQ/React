import React from "react";
import {Card, Container, Row} from "react-bootstrap";
import {Button} from "react-bootstrap";

class Joke extends React.Component{
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.clickHandler = this.clickHandler.bind(this)

    }
    clickHandler(){
        this.setState(prevState=>{
            return {
                counter: prevState.counter + 1
            }
        })
    }
    render(){
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.id}</Card.Title>
                    <Card.Text>
                        {this.props.joke}
                    </Card.Text>
                    <Button variant="primary" onClick={this.clickHandler}>Like</Button>
                    <div>{this.state.counter}</div>
                </Card.Body>
            </Card>
        )
    }
}
export default Joke
