import {Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Livros from './pages/Livros'
// import Login from './pages/Login'
 
 const Routes = () => {
     return (
        <BrowserRouter>
            <Route component = {Home} path="/" exact />
            <Route component = {Sobre} path='/sobre' />
            {/* <Route component = {Login} path='/login' /> */}
            <Route component = {Livros} path='/livros' />
        </BrowserRouter>
     )
 } 

 export default Routes;