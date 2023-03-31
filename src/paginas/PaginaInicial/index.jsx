import Cabecalho from "../../componentes/Cabecalho"
import Principal from "../../componentes/Principal"
import Galeria from "../../componentes/Galeria"
import GaleriaPopular from "../../componentes/GaleriaPopular"

//estilo
import './paginaInicial.css'

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <Principal />
                <div className="galeriaDiv">
                   <Galeria /> 
                   <GaleriaPopular />
                </div>
            </main>
        </>
    )
}