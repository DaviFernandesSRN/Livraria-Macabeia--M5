import React from 'react'
import '../assets/style/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faLocationCrosshairs, faShareNodes, faInfo } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"

function Footer () {
    return (
        <footer className='footer'>
            <div className='footer-col'>
                <span className='footer-title'>
                <FontAwesomeIcon icon={faBook} /> LIVRARIA</span>
                <br />
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos sint, aliquam nobis maxime autem voluptatibus quis nulla pariatur incidunt ad et quas, error, voluptatem porro laboriosam recusandae dicta tempora?
                <br/>
                <br/>
                {/* Incluir route para a página sobre */}
                Saiba mais sobre nós
            </div>
            <div className='footer-col'>
            <span className='footer-title'>
                <FontAwesomeIcon icon={faLocationCrosshairs} /> NOSSA SEDE</span>
                <br/>
                <br/>
                São Paulo, SP<br/>
                CEP: 04.190-980<br />
                Tel.: 55 11 9 8738 8378
                Email: admin@macabea.com.br
                </div>
            <div className='footer-col'>
            <span className='footer-title'>
                <FontAwesomeIcon icon={faShareNodes} /> REDES SOCIAIS</span>
                <br/>
                <br/>
                {/* <FontAwesomeIcon icon={['fab', 'facebook-f']} className='icon' />
                <FontAwesomeIcon icon={faFacebook} className='icon' /> */}
                <img src="src\assets\img\instagram-icon.png" className='icon' /> Instagram
                <br/>
                <img src="src\assets\img\fb-icon.png" className='icon' /> Facebook
                <br/>
                <img src="src\assets\img\tt-icon.png" className='icon' /> Twitter
            </div>
            <div className='footer-col'>
            <span className='footer-title'>
                <FontAwesomeIcon icon={faInfo} /> INFORMAÇÕES</span>
                <br/>
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste iusto tenetur esse aliquid rem consequuntur nulla ipsa. Eveniet ad consequatur quidem beatae placeat vel id illum exercitationem tenetur. Libero?
            </div>
        </footer>
    )
}

export default Footer;