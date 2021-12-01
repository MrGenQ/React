import React from "react";
class Article extends React.Component{
    render(){
        return (
            <article>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
                <a href="#">Daugiau...</a>
            </article>
        )
    }
}
export default Article