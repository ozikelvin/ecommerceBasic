import React, { Component } from 'react';
import {BrowserRouter as Router , Switch,Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import { Toaster } from 'react-hot-toast';
import { Admin } from './components/Admin';
import { ContactUs } from './components/contactus';
import { Category } from './components/category';
import {Phones} from './components/phones';
import {Desktop} from './components/desktops';
import {Laptops} from './components/laptops';
import {Accessories} from './components/acceso';




class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
   
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details/:id" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path='/product' component={Category} />
          <Route path='/admin' component={Admin} />
          <Route path='/contact' component={ContactUs} />
          <Route path='/phones' component={Phones} />
          <Route path='/laptops' component={Laptops} />
          <Route path='/desktop' component={Desktop} />
          <Route path='/accessories' component={Accessories} />
          <Route component={Default} />
        
        </Switch>

        <Toaster
						position='top-center'
						toastOptions={{
							className: '',
							style: {
								margin: '30px',
								minWidth: '300px',  
								display: 'inline-flex',
								fontSize: '14px',
								zIndex: 999999,
							},
							duration: 3000,
						}}
					/>
       
      </Router>
    );
  }
}

export default App;