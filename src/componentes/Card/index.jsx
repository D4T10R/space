import React from 'react'

//imagens 
import open from './open.png'
import favorito from './favorito.png'

// json
import fotos from './fotos.json'

// estilos 
import './Card.css'


export default function Card() {
    return (
        <>
            {fotos.map((foto => {
                return (
                    <li key={foto.id} className="galeria__card">
                        <img className="galeria__imagem" src={foto.imagem} alt="" />
                        <p className="galeria__descricao">{foto.titulo}</p>
                        <div >
                            <p>{foto.creditos}</p>
                            <span >
                            <img src={favorito} alt="" />
                            <img src={open} alt="" />
                            </span>
                        </div>
                    </li>
                )
            }))}
        </>
    )
}
