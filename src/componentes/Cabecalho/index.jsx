import logo from './logo.png'
import search from './search.png'
import './cabecalho.css'

export default function Cabecalho() {
    return (
        <header className='cabecalho'>
            <img src={logo} alt="icone alura-space"/>
            <div className='cabecalho__container'>
                <input className='cabecalho__input' type="text" />
                <img src={search} alt="icone-lupa" />
            </div>
        </header>
    )
    }