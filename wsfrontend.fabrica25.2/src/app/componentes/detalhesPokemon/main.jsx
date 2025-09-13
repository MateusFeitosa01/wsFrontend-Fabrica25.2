'use client';

import './main.css'    
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";


export default function DetalhesPokemon(){
    const parametro = useParams();
    const { id } = parametro;
    const [pokemon, setPokemon] = useState(null)

    useEffect(()=>{
            const pesquisarPokemon = async () => {
            try{
                const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const dados = await resposta.json();
                setPokemon(dados)
            }catch(erro){
                console.error("Erro... "+ erro)
            }
        }
        pesquisarPokemon()
    },[id])

    if (!pokemon) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Carregando...</p>;
  }
  
    return(
        <>
            <main className='main-detalhes-pokemon'>
                 <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
                
                <ul>
                    <li>id: {pokemon.id}</li>
                    <li>Tipo:{pokemon.types.map((t) => t.type.name).join(" / ")}</li>
                    <li><strong>Peso:</strong> {pokemon.weight}</li>
                    <li><strong>Experiência Base:</strong> {pokemon.base_experience}    </li>
                </ul>
            </main>
        </>
    )

}   