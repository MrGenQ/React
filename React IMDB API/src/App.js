import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Movies from "./components/Movies";

const App = () =>{
        return(
            <Container>
                <Router>
                <Header/>
                    <Container style={{marginTop:'80px'}}>
                <Routes>
                    <Route path="/" element={<Movies/>}/>
                    <Route path="/about" element={<About/>}/>              
                </Routes>
                    </Container>
                </Router>
                <Footer/>
            </Container>
        )
}
export default App
