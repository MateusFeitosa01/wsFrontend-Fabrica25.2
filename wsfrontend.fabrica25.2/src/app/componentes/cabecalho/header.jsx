"use client"
import "./header.css"

import BarraDePesquisa from "../barraDePesquisa/barraDePesquisa"
export default function Header({ pesquisa, setPesquisa }){
    return(
        <header>
            <a href="../../"><img src="/imagens/logoPokemon.png"/></a>
            <BarraDePesquisa pesquisa={pesquisa} setPesquisa={setPesquisa}/>
        </header>
    )
}