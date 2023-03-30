import React from 'react'

//componentes
import Menu from '../Menu'

//imagens
import banner from './banner.png'

//estilos
import './Principal.css'

export default function principal() {
  return (
    <section className="principal">
        <Menu />
        <div className="principal__imagem" >
            <h1>A imagem da terra vista do espaço</h1>
            <img src={banner} alt="foto da terra no espaço"/>
        </div>
    </section>
    )
}
