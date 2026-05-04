import type { Pokemon } from "../types/pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="card bg-base-200 w-80 shadow-sm border border-base-300">
      <figure>
        <img src={pokemon.imageUrl} alt={pokemon.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {pokemon.name}
          <div className="badge badge-primary">{pokemon.level}</div>
        </h2>
        <p>{pokemon.type}</p>
        <div className="card-actions justify-end">
          <div className="btn btn-outline btn-warning">Edit</div>
          <div className="btn btn-outline btn-error">Delete</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
