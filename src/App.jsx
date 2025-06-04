import { useEffect, useState } from "react";
import "./index.css";
import { PokemonCards } from "./PokemonCards";

export default function App() {
  return (
    <>
      {/* Seção principal que contém todo o conteúdo da Pokédex */}
      <section className="container">
        <header>
          {/* Título principal da página */}
          <h1 className="title">Pokédex</h1>
        </header>

        {/* Barra de ações, por enquanto com botão para adicionar novo Pokémon */}
        <div className="actions-bar">
          <button className="btn-add">Adicionar Novo Pokémon</button>
        </div>

        {/* Input para buscar Pokémon pelo nome */}
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokémon"
          />
        </div>

        {/* Lista de cards de Pokémon */}
        <div>
          <ul className="cards">
            {/* Renderiza várias instâncias do componente PokémonCard.
                Em uma versão dinâmica, seria mapeado a partir de um array de dados */}
            <PokemonCards />
            <PokemonCards />
            <PokemonCards />
            <PokemonCards />
            <PokemonCards />
            <PokemonCards />
            <PokemonCards />
            <PokemonCards />
          </ul>
        </div>
      </section>
    </>
  );
}

