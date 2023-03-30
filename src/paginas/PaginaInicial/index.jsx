import Cabecalho from "../../componentes/Cabecalho"
import Principal from "../../componentes/Principal"

//imagens 

//estilo
import './paginaInicial.css'

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <Principal />
            </main>
        </>
    )
}