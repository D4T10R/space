import React from 'react'

// estilos
import './Tags.css'

export default function Tags() {
    return (
        <div className="tags">
            <p>Busque por tags</p>
            <ul className="tags__lista">
                <li>Estrelas</li>
                <li>Galáxias</li>
                <li>Lua</li>
                <li>Planetas</li>
            </ul>
        </div>
    )
}
