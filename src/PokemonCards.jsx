export function PokemonCards() {
  return (
    // Cada card é um item de lista (<li>) com classe de estilo para formatar como um card
    <li className="pokemon-card">
      <figure>
        {/* Imagem do Pokémon; o src está como placeholder "#" e deve ser substituído pela URL real */}
        <img
          src="#"
          alt="Pokemon"
          className="pokemon-image"
        />
      </figure>

      {/* Nome do Pokémon */}
      <h1 className="pokemon-name">Pokemon Name</h1>

      {/* Seção de destaque que exibe o tipo do Pokémon */}
      <div className="pokemon-info pokemon-highlight">
        <p>
          Pokemon Type
        </p>
      </div>

      {/* Seção em grid com três colunas para exibir atributos de altura, peso e velocidade */}
      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>Height:</span> Height
        </p>
        <p className="pokemon-info">
          <span>Weight:</span> Weight
        </p>
        <p className="pokemon-info">
          <span>Speed:</span> Speed
        </p>
      </div>

      {/* Outra seção em grid com três colunas para exibir experiência, ataque e habilidades */}
      <div className="grid-three-cols">
        <div className="pokemon-info">
          {/* Texto fixo e depois valor de experiência */}
          <p>Experience</p>
          <span>Experience:</span>
        </div>
        <div className="pokemon-info">
          {/* Texto fixo e depois valor de ataque */}
          <p>Attack</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          {/* Texto fixo e depois lista de habilidades */}
          <p>
            Abilities
          </p>
          <span>Abilities:</span>
        </div>
      </div>

      {/* Ações disponíveis para cada card: editar ou apagar o Pokémon */}
      <div className="card-actions">
        <button className="btn-edit">Editar</button>
        <button className="btn-delete">Apagar</button>
      </div>
    </li>
  );
};

