import "./App.css";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import { useEffect } from "react";
import { getPokemon } from "./api";

//
import { connect } from "react-redux";
import { setPokemons as setPokemonsActions } from "./actions";

function App({ pokemons, setPokemons }) {
    useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonsRes = await getPokemon();
            setPokemons(pokemonsRes);
        };

        fetchPokemons();
    }, []);

    return (
        <div className="App">
            <Col span={4} offset={10}>
                <img src={logo} alt="" />
            </Col>
            <Col span={8} offset={8}>
                <Searcher />
            </Col>

            <Col>
                <PokemonList pokemons={pokemons} />
            </Col>
        </div>
    );
}

const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
});

const mapDispathToProps = (dispatch) => ({
    setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

/* export default App; */
export default connect(mapStateToProps, mapDispathToProps)(App);
