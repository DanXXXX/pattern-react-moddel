import React  from 'react';
import Brand from './includes/Brand'
import Navbar from './includes/Navbar'

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                
                <header className="header">
                    <Brand />
                    <Navbar />
                </header>
            </>    
         );
    }
}
 
export default Header;
