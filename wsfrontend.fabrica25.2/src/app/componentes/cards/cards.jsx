"use client";
import Link from "next/link";
import { useState } from "react";
import "./cards.css";

export default function PokemonCarta({ pokemon, layoutAlternativo  }) {
  const [favorito, setFavorito] = useState(false);



  const favoritar = (e) => {
    e.preventDefault(); 
    setFavorito(!favorito);
  };

  return (
    <Link href={`/detalhes/${pokemon.id}`} className={`carta`}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>#{pokemon.id}</p>
      <h3>{pokemon.name}</h3>

      <button
        className={`botao-favorito ${favorito ? "ativo" : ""}`}
        onClick={favoritar}
      >
        {favorito ? "★" : "☆"}
      </button>
    </Link>
  );
}
