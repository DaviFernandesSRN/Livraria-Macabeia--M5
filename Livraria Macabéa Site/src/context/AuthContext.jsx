import React, {useState, useEffect, createContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { createSession} from "../utils/axios"
export const AuthContext = createContext();


export const AuthProvider = ({children}) =>{

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
       const recoveredUser = localStorage.getItem('user');
      
       if(recoveredUser != undefined){
           setUser(recoveredUser);
       }
    console.log(recoveredUser);
    
       setLoading(false);
    },[])


  


    const login = async (email, senha)=>{

        
        const usuario = await createSession(email, senha)
       
        console.log('login auth', usuario.data);
       
        const senhaUsuario = await usuario.data.senha
        await console.log(senhaUsuario)

        if(senhaUsuario === senha){
            const loggedUser = usuario.data.email;
            localStorage.setItem('user', loggedUser);
        }else{
            return alert('Senha errada')
        }

        const loggedUser = usuario;


        // localStorage.setItem('user', loggedUser);
        
       // api.defaults.headers.Authorization = `Bearer ${token}`;

      
            setUser(loggedUser);
            navigate('/')
        
    }

    const logout = ()=>{
        console.log("logout");
        localStorage.removeItem('user')
        // api.defaults.headers.Authorization = null;
        setUser(null);
        navigate('/Login')
    };

    return(
        <AuthContext.Provider 
        value={{authenticate: !!user, user, login, loading, logout}}>
        {children}
        </AuthContext.Provider>    
    )
}