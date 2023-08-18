import { useEffect, useState } from 'react';
import { connect } from 'react-redux'; //una vez importamos connect, tendremos mapStatetoProps por convencion y mapDispatch to props
import { Col } from 'antd';
import Searcher from '../src/Components/Searcher';
import PokemonList from '../src/Components/PokemonList';
import { getPokemon } from './api';
import { setPokemons as setPokemonsActions } from './actions';
import logo from './statics/logo.svg';
import './App.css';

function App({ pokemons, setPokemons }) {
  console.log("🚀 ~ file: App.js ~ line 12 ~ App ~ pokemons", pokemons)
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

//Const map StatetoProps Es una funcion que va a recibir nuestro estado y va a retornar un objeto cuyas propiedades van a ser enviadas a los props del componente que se esta conectando a React.
const mapStateToProps = (state) => ({ 
  pokemons: state.pokemons, 
});

//Es una funcion que en lugar del estado, va a recibir el dispatcher de redux, retornara un objeto que va a ser mapeado a nuestras propiedades pero ahora con los action creators ya establecidos. Acordarse de importar setPokemon. Esta funcion va a llamar al disparador de Redux para poder ejecutar dicha accion.

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

