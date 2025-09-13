"use client";

export default function BarraDePesquisa({pesquisa, setPesquisa}){
    return(
        <form className="pesquisarPokemon" onSubmit={(e)=>e.preventDefault()}>
                <input 
                    type="text" 
                    value={pesquisa}
                    placeholder="Buscar Pokémon..." 
                    className="valorPesquisa" 
                    onChange={(e)=> setPesquisa(e.target.value)}></input>
                
        </form>
    )
}