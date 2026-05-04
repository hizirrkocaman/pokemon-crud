import { usePokemons } from "../hooks/usePokemons";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const { data: pokemons } = usePokemons();

  return (
    <div className="flex flex-wrap p-6 gap-6 justify-center  items-center ">
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
