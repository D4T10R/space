import React from 'react'


// componentes
import Tags from '../Tags'
import Card from '../Card'


//estilos
import './Galeria.css'

export default function Galeria() {
    return (
        <section className="galeria">
          <h2>Navegue pela galeria</h2>
          <Tags />
          <ul className="galeria__cards">
            <Card />
          </ul>
 
        </section>
    )
}
/*
<li>
  <img src="" alt="" />
  <p></p>
  <div>
    <p></p>
    <span>
      <img src="" alt="" />
      <img src="" alt="" />
    </span>
  </div>
</li>
*/