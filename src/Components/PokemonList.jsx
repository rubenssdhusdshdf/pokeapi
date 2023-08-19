import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
    console.log("djd")
    return (
        <div className='PokemonList'>
            {pokemons.map((pokemon) => {
                return (<PokemonCard
                    name={pokemon.name}
                    key={pokemon.name}
                    image={pokemon.sprites.front_default}
                />
                );
            })}
        </div>
    );
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''), //va a crear un array de 10 posiciones donde cada posicion va a ser ''
};

export default PokemonList;