import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import { DISHES } from './shared/dishes';
// import Dishdetail from './components/DishdetailComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

	const store = ConfigureStore();


class App extends Component {

  render() {
    return (


      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
      
     
      );
  }
}

export default App;
