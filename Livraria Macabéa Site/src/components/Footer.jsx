import React from 'react'
import '../assets/style/footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faLocationCrosshairs, faShareNodes, faInfo } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"

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
                <Link to='/sobre'>Saiba mais sobre nós</Link>
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
                <Link to="instagram.com">
                <FontAwesomeIcon icon={faInstagramSquare} className='icon' /> Instagram
                </Link>
                
                <br/>
                <Link to="facebook.com">
                <FontAwesomeIcon icon={faFacebookSquare} className='icon' /> Facebook
                </Link>
                
                <br/>
                <Link to="twitter.com">
                <FontAwesomeIcon icon={faTwitterSquare} className='icon' /> Twitter
                </Link>
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