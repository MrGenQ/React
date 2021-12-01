import React from "react";
import Article from "./Article";
import articles from "../Data/article";
class Main extends React.Component{
    render(){
        return(
            <main>
                <h2>Naujienos</h2>
                {articles.map(article=><Article key={article.id} title={article.title} content={article.content}/>)}
            </main>
        )
    }
}
export default Main