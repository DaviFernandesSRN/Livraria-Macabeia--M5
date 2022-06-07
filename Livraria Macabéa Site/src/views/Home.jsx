import React, { Component } from 'react'
import BookCover from '../components/BookCover'
import BookSection from '../components/BookSection'
import BookTable from '../components/BookTable'
import '../style/livro.css'
import axios from "axios";
import appoi from './h'

class AppHOME extends Component{
  async componentDidMount(){
    const response = await appoi.get('/livros');
    console.log(response.data)
  }
render(){ 


  return(
        <section className='main'>
          
      
        <h1>Listar</h1>

           
            
        </section>
    )
}}



