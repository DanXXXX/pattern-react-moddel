import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from "./components/pages/Home";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }
  render() { 
    return (  
      <>
       
          <BrowserRouter>
                <Header />
                <Footer />
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="*" component={Error404}/>
                    </Switch>
                </div>
          </BrowserRouter>
      </>
    );
  }
}

export default App;