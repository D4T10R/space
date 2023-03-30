import React from 'react'

// imagens
import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novasInativo from '../../assets/icones/novas-inativo.png'
import surpreendaMe from '../../assets/icones/surpreenda-me-inativo.png'

//estilo
import './menu.css'

export default function Menu() {
  return (
        <nav className='menu'>
            <ul className='menu__lista'>
                <li>
                    <img src={home} alt="" />
                    <a href="">Inicio</a>
                </li>
                <li>
                    <img src={maisCurtidas} alt="" />
                    <a href="">Mais curtidas</a>
                </li>
                <li>
                    <img src={maisVistas} alt="" />
                    <a href="">Mais vistas</a>
                </li>
                <li>
                    <img src={novasInativo} alt="" />
                    <a href="">Novas</a>
                </li>
                <li>
                    <img src={surpreendaMe} alt="" />
                    <a href="">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}
