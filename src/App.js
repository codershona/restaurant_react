import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import { DISHES } from './shared/dishes';
// import Dishdetail from './components/DishdetailComponent';


class App extends Component {


  render() {
    return (

       <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
     
      );
  }
}

export default App;
