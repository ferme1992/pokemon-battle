import {
  Box,
  Button,
  CircularProgress,
  Grid2,
  Typography,
} from "@mui/material";
import { Pokemon } from "../types/Pokemon";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import PokemonCard from "./PokemonSelectionCard";
import { findAll } from "../services/Pokemon.service";
import { pokemonBattle } from "../services/Battles.service";
import PokemonBattleCard from "./PokemonBattleCard";
import {
  BATTLE_TITLE,
  BATTLE_WINNER_TEXT,
  FETCH_POKEMON_ERROR,
  OPPONENT_SELECTION_PROMPT,
  SELECT_POKEMON_PROMPT,
  SIMULATE_BATTLE_ERROR,
  START_BATTLE_BUTTON_TEXT,
} from "../constants/battleUIConstants";

const PokemonBattleUI: FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [opponent, setOpponent] = useState<Pokemon | null>(null);
  const [battleWinner, setBattleWinner] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch Pokemon data on component mount
  useEffect(() => {
    const getPokemons = async () => {
      try {
        const fetchedPokemons = await findAll();
        setPokemons(fetchedPokemons);
      } catch (err) {
        setError(FETCH_POKEMON_ERROR);
        console.error(err);
      }
    };

    getPokemons();
  }, []);

  // Memoized function to get a random opponent
  const getRandomOpponent = useCallback((): Pokemon | null => {
    const possibleOpponents = pokemons.filter(
      (pokemon) => pokemon.id !== selectedPokemon?.id
    );
    if (possibleOpponents.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * possibleOpponents.length);
    return possibleOpponents[randomIndex];
  }, [pokemons, selectedPokemon]);

  // Handler to select a Pokémon
  const handlePokemonSelect = useCallback((pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setOpponent(null);
    setBattleWinner(null);
  }, []);

  // Function to start the battle
  const startBattle = useCallback(async () => {
    if (!selectedPokemon) return;

    setBattleWinner(null);
    const randomOpponent = getRandomOpponent();
    if (!randomOpponent) return;

    setOpponent(randomOpponent);
    setLoading(true);
    try {
      const result = await pokemonBattle(selectedPokemon.id, randomOpponent.id);
      setBattleWinner(result);
    } catch (err) {
      setError(SIMULATE_BATTLE_ERROR);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [selectedPokemon, getRandomOpponent]);

  // Memoized rendering of the Pokemon list
  const renderedPokemonCards = useMemo(
    () =>
      pokemons.map((pokemon) => (
        <Grid2
          size={{ xs: 6, sm: 4, md: 2.4 }}
          key={`Pokemon-Card-${pokemon.id}`}
        >
          <PokemonCard
            pokemon={pokemon}
            isSelected={selectedPokemon?.id === pokemon.id}
            onClick={() => handlePokemonSelect(pokemon)}
          />
        </Grid2>
      )),
    [pokemons, selectedPokemon, handlePokemonSelect]
  );

  return (
    <Box maxWidth={800} m="auto" p={2}>
      <Typography variant="h4" gutterBottom>
        {BATTLE_TITLE}
      </Typography>

      {error && (
        <Box bgcolor="error.main" color="error.contrastText" p={2} mb={2}>
          <Typography variant="body1">{error}</Typography>
        </Box>
      )}

      <Typography variant="h6" gutterBottom>
        {SELECT_POKEMON_PROMPT}
      </Typography>
      <Grid2 container spacing={2} mb={2}>
        {renderedPokemonCards}
      </Grid2>

      {battleWinner && (
        <Box
          bgcolor="primary.light"
          p={2}
          mb={2}
          border={2}
          borderRadius={1}
          borderColor={"success"}
          boxShadow={4}
        >
          <Typography variant="h6">
            {BATTLE_WINNER_TEXT(battleWinner.name)}
          </Typography>
        </Box>
      )}

      {selectedPokemon && (
        <Grid2 container spacing={2} alignItems="stretch">
          <Grid2 size={{ xs: 12, md: 5 }}>
            <PokemonBattleCard pokemon={selectedPokemon} />
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 2 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="success"
              onClick={startBattle}
              disabled={loading}
              sx={{ height: 50 }}
            >
              {loading ? (
                <CircularProgress size={24} />
              ) : (
                START_BATTLE_BUTTON_TEXT
              )}
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 5 }}>
            {opponent ? (
              <PokemonBattleCard pokemon={opponent} />
            ) : (
              <Box
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="body1">
                  {OPPONENT_SELECTION_PROMPT}
                </Typography>
              </Box>
            )}
          </Grid2>
        </Grid2>
      )}
    </Box>
  );
};

export default PokemonBattleUI;
