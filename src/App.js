import "./App.css";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import { useEffect } from "react";
import { getPokemon, getPokemonDetail } from "./api";

//
import { useDispatch } from "react-redux";
import { getPokemonsWithDetails, setPokemons } from "./actions";
import { useSelector } from "react-redux";

function App() {
    const pokemons = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonsRes = await getPokemon();
            dispatch(getPokemonsWithDetails(pokemonsRes));
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

/* export default App; */
export default App;
