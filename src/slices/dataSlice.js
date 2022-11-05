// pokemonSlice
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
//
import { getPokemon, getPokemonDetail } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
    "data/fetchPokemonsWithDetails",
    async (_, { dispatch }) => {
        // dispatch loader
        // fech
        // dispatch laoder

        dispatch(setLoading(true));
        const pokemonsRes = await getPokemon();
        const pokemonDetailed = await Promise.all(
            pokemonsRes.map((pokemon) => getPokemonDetail(pokemon))
        );
        dispatch(setPokemons(pokemonDetailed));
        dispatch(setLoading(false));
    }
);

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId;
            });
            if (currentPokemonIndex >= 0) {
                const isFavorite =
                    state.pokemons[currentPokemonIndex].isFavorite;
                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            }
        },
    },
});

export const { setFavorite, setPokemons } = dataSlice.actions;
export default dataSlice.reducer; //dataReducer
