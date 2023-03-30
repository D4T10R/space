import Cabecalho from "../../componentes/Cabecalho"
import Principal from "../../componentes/Principal"


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