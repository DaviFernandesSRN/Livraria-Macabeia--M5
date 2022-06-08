import React from 'react';  // importa React de react
import Home from './pages/home/index';  // importa Home de /pages/home/index.js
import Cart from './pages/cart/cart';  // importa cart de /pages/cart/cart.js
import ShowCart from './pages/cart/show-cart';  // importa ShowCart de /pages/cart/show-cart.js

// importa de react-router-dom para as rotas de react
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// declare componente de classe App que herda (estende) de React.Component
class App extends React.Component {
    // renderiza as funcionalidades das rotas
    render() {
        return (
            <>
                <Router>
                    <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/cart/:id" render={({match}) => (
                        <Cart id={match.params.id} />
                    )} />
                    <Route exact path="/show-cart">
                        <ShowCart />
                    </Route>
                    </Switch>
                </Router>
            </>
        );
    }
};

export default App;