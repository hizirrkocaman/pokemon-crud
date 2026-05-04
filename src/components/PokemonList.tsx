import { usePokemons } from "../hooks/usePokemons";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const { data: pokemons, isLoading, isError } = usePokemons();

  if (isLoading)
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <span className="loading loading-spinner loadin-xl "></span>
      </div>
    );

  if (isError) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <div role="alert" className="alert alert-error w-120">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Bir hata oluştu!</span>
        </div>
      </div>
    );
  }

  if (!pokemons || pokemons.length === 0) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <p className="text-base-content/60 mb-6">Henüz hiç pokemon yok.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap p-6 gap-6 justify-center  items-center ">
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
