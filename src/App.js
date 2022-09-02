import "./App.css";
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import { useEffect } from "react";
import { getPokemon } from "./api";

//
import { shallowEqual, useDispatch } from "react-redux";
import { getPokemonsWithDetails, setLoading } from "./actions";
import { useSelector } from "react-redux";

function App() {
    const pokemons = useSelector((state) =>
        state.getIn(["data", "pokemons"], shallowEqual)
    ).toJS();
    const loading = useSelector((state) => state.getIn(["ui", "loading"]));
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPokemons = async () => {
            dispatch(setLoading(true));
            const pokemonsRes = await getPokemon();
            dispatch(getPokemonsWithDetails(pokemonsRes));
            dispatch(setLoading(false));
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

            {loading ? (
                <Col offset={12}>
                    <Spin spinning size="large"></Spin>
                </Col>
            ) : (
                <Col>
                    <PokemonList pokemons={pokemons} />
                </Col>
            )}
        </div>
    );
}

/* export default App; */
export default App;
