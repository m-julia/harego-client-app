import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Home page</h1>
            <Link to="search">
                Search
        </Link>
        </div>
    )
    
    
}

export default HomePage;