import {
  Box,
  Button,
  Card,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";
import { Pokemon } from "../types/Pokemon";
import { FC, useState } from "react";
import PokemonCard from "./PokemonCard";
import StatBar from "./StatBar";

const pokemons = [
  {
    id: "pokemon-1",
    name: "Pikachu",
    attack: 4,
    defense: 3,
    hp: 3,
    speed: 6,
    type: "Type",
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
  },
  {
    id: "pokemon-2",
    name: "Charmander",
    attack: 4,
    defense: 3,
    hp: 3,
    speed: 4,
    type: "Type",
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: "pokemon-3",
    name: "Squirtle",
    attack: 3,
    defense: 4,
    hp: 3,
    speed: 3,
    type: "Type",
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
  },
  {
    id: "pokemon-4",
    name: "Bulbasur",
    attack: 4,
    defense: 3,
    hp: 3,
    speed: 3,
    type: "Type",
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: "pokemon-5",
    name: "Eevee",
    attack: 4,
    defense: 3,
    hp: 4,
    speed: 5,
    type: "Type",
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png",
  },
];

const PokemonBattleUI: FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [opponent, setOpponent] = useState<Pokemon | null>(null);
  const [battleResult, setBattleResult] = useState<string | null>(null);

  const handlePokemonSelect = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setOpponent(null);
    setBattleResult(null);
  };

  const startBattle = () => {
    if (selectedPokemon) {
      const randomOpponent = pokemons.find((p) => p.id !== selectedPokemon.id);
      if (randomOpponent) {
        setOpponent(randomOpponent);
        // Simple battle logic (will be expanded)
        const result =
          Math.random() > 0.5 ? selectedPokemon.name : randomOpponent.name;
        setBattleResult(`${result} wins!`);
      }
    }
  };

  return (
    <Box maxWidth={800} m="auto" p={2}>
      <Typography variant="h4" gutterBottom>
        Battle of Pokemon
      </Typography>

      <Typography variant="h6" gutterBottom>
        Select your pokemon
      </Typography>
      <Grid2 container spacing={2} mb={2}>
        {pokemons.map((pokemon) => (
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
        ))}
      </Grid2>

      {battleResult && (
        <Box
          bgcolor="info.main"
          color="info.contrastText"
          p={2}
          mb={2}
          borderRadius={1}
        >
          <Typography variant="h6" align="center">
            {battleResult}
          </Typography>
        </Box>
      )}

      {selectedPokemon && (
        <Grid2 container spacing={2} alignItems="stretch">
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Card>
              <CardContent>
                <img
                  src={selectedPokemon.imageUrl}
                  alt={selectedPokemon.name}
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="h6">{selectedPokemon.name}</Typography>
                <StatBar label="HP" value={selectedPokemon.hp} />
                <StatBar label="Attack" value={selectedPokemon.attack} />
                <StatBar label="Defense" value={selectedPokemon.defense} />
                <StatBar label="Speed" value={selectedPokemon.speed} />
              </CardContent>
            </Card>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 2 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={startBattle}
              sx={{ height: 50 }}
            >
              Start Battle
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 5 }}>
            {opponent ? (
              <Card>
                <CardContent>
                  <img
                    src={opponent.imageUrl}
                    alt={opponent.name}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">{opponent.name}</Typography>
                  <StatBar label="HP" value={opponent.hp} />
                  <StatBar label="Attack" value={opponent.attack} />
                  <StatBar label="Defense" value={opponent.defense} />
                  <StatBar label="Speed" value={opponent.speed} />
                </CardContent>
              </Card>
            ) : (
              <Box
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="body1">
                  Select a Pokemon and start battle to see opponent
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
