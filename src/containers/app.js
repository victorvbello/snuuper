import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Product from '../components/product';
import Cart from '../components/cart';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
           <h2>Mi Carrito de Compras</h2>
           <ul>
              <li><Link to={'/products/video-games'}>Video Juegos</Link></li>
              <li><Link to={'/products/movies'}>Peliculas</Link></li>
              <li><Link to={'/products/electronics'}>Tecnología</Link></li>
              <li><Link to={'/shoppingCart'}>Carro de Compras</Link></li>
           </ul>
           <hr />
           
           <Switch>
              <Route exact path='/products/:category' component={Product} />
              <Route exact path='/shoppingCart' component={Cart} />
           </Switch>
           <Cart/>
        </div>
     </Router>
    );
  }
}

export default App;