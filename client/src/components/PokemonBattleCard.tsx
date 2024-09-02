import { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Pokemon } from "../types/Pokemon";
import StatBar from "./StatBar";

interface PokemonBattleCardProps {
  pokemon: Pokemon;
}

const PokemonBattleCard: FC<PokemonBattleCardProps> = ({ pokemon }) => {
  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <img
          src={pokemon.imageUrl}
          alt={pokemon.name}
          style={{ width: "100%", height: "auto" }}
        />
        <Typography variant="h6">{pokemon.name}</Typography>
        <StatBar label="HP" value={pokemon.hp} />
        <StatBar label="Attack" value={pokemon.attack} />
        <StatBar label="Defense" value={pokemon.defense} />
        <StatBar label="Speed" value={pokemon.speed} />
      </CardContent>
    </Card>
  );
};

export default PokemonBattleCard;
