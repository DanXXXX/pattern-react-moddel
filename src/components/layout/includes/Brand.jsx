import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
class Brand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Link to="/" className="brand">
                <h1 className="brand__title">logo</h1>
            </Link>
         );
    }
}
 
export default Brand;