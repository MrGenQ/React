import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jokes from "./components/Jokes";

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <Jokes/>
                <Footer/>
            </div>
        )
    }
}
export default App