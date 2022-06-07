import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Livros from './pages/Livros'
import { AuthContext, AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import { useContext } from 'react'
import CadastroPage from './pages/Cadastro'
import App from './utils/getLivrosPor'

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
            <Route path='/' index element={  <Home/> }/>
            <Route path='/sobre' element = {<Sobre/>} />
            <Route path='/livros' element = {<Livros/>}  />
            <Route  path='/login' element= {<Login/>}  />
            <Route path="/Cadastro" element={<CadastroPage/>}/>
           <Route path="/procurar/:titulo" element={<App/>}/>
            </Routes>
            </AuthProvider>
        </BrowserRouter>
       
     )



 } 






 export default AppRoutes;