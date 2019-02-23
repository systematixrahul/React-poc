import React from "react";
import Home from "../components/Home/home"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import {Link} from '../routes';


const App = () =>(
    <div className="main-wrapper">
        <Header />
        <Home />
        <Footer />
    </div>
)
 export default App;
