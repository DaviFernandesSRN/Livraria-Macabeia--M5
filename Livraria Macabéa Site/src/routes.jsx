import {Route, BrowserRouter} from 'react-router-dom'
import Home from './views/Home'
import Sobre from './views/Sobre'
// import Fantasia from './Fantasia'
// import FicLit from './FicLit'
// import YA from './YA'
// import NaoFic from './NaoFic'
// import Classicos from './Classicos'
 
 const Routes = () => {
     return (
        <BrowserRouter>
            <Route component = {Home} path="/" exact />
            <Route component = {Sobre} path='/sobre' />
        </BrowserRouter>
     )
 } 

 export default Routes;