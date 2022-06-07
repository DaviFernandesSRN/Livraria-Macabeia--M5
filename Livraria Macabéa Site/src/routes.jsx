import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Livros from './pages/Livros'
import { AuthContext, AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import EditarConta from './pages/EditarConta'
import { useContext } from 'react'

 const AppRoutes = () => {
    const Private = ({children}) =>{
        const {authenticate, loading} = useContext(AuthContext);
        if(loading){
            return <div className='loading'>carregando...</div>
        }

        if(!authenticate){
            return <Navigate to='/Login'/>;
        }

        return children;
    }


     return (
        <BrowserRouter>
        <AuthProvider>
        
        <Routes>
            <Route path='/' index element={<Home/> }/>
            <Route path='/sobre' element = {<Sobre/>} />
            <Route path='/livros' element = {<Livros/>}  />
            <Route  path='/login' element= {<Login/>}  />
            <Route path='/editarconta' element = { <Private> <EditarConta /> </Private>} />
            </Routes>
            </AuthProvider>
        </BrowserRouter>
       
     )
 } 

 export default AppRoutes;