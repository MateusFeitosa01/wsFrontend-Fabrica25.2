"use client";
import { useState, useEffect } from "react";
import Header from "./componentes/cabecalho/header.jsx";
import PokemonCard from "./componentes/cards/cards.jsx";
import Footer from "./componentes/rodape/footer.jsx"
import BotaoGrid from "./componentes/botaoMudarGrid/mudaGrid.jsx"
import "./globals.css"


export default function Home() {

  const [pokemons, setPokemons] = useState([])
  const [pesquisa, setPesquisa] = useState("")
  const [layoutAlternativo, setLayoutAlternativo] = useState(false)

  useEffect(()=>{
    const buscarPokemon = async() =>{

      const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      const dados = await resposta.json()

      const detalhes = []

      for(const p of dados.results){
        const respostaDetalhada = await fetch(p.url)
        const pokemonDetalhado = await respostaDetalhada.json()
        detalhes.push(pokemonDetalhado)
      }
      setPokemons(detalhes)
    } 

    buscarPokemon()
  },[])

  const filtrarPokemon = pokemons.filter((p)=>
    p.name.toLowerCase().includes(pesquisa.toLowerCase())
  )

  return (
    <>
      <Header pesquisa={pesquisa} setPesquisa={setPesquisa} />
      <BotaoGrid layoutAlternativo={layoutAlternativo} setLayoutAlternativo={setLayoutAlternativo}/>
      <main className={`container-de-carta ${layoutAlternativo ? "grid-alternativo" : ""}`}>
        {filtrarPokemon.map((p)=>(
          <PokemonCard pokemon={p} key={p.id} layoutAlternativo={layoutAlternativo}/>
        ))}
      </main>
      <Footer/>
    </>
  );
}
