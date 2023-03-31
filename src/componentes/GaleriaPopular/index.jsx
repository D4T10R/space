import React from 'react'

// json
import fotosPopulares from './fotos-populares.json'

// estilos
import './GaleriaPopular.css'

export default function GaleriaPopular() {
    return (
        <aside className='populares'>
            <h2>Populares</h2>
            <ul className='populares__imagens' >
                {fotosPopulares.map((fotoPopular) => {
                    return (
                        <li key={fotoPopular.id} >   
                            <img  src={fotoPopular.path} alt={fotoPopular.alt} />
                        </li>
                    )
                    
                })}
            </ul>
            <button className='botao'>Ver mais</button>
        </aside>
    )
}
