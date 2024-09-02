import { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Pokemon } from "../types/Pokemon";
import StatBar from "./StatBar";
import {
  LABEL_ATTACK,
  LABEL_DEFENSE,
  LABEL_HP,
  LABEL_SPEED,
} from "../constants/pokemonCards";

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
        <StatBar label={LABEL_HP} value={pokemon.hp} />
        <StatBar label={LABEL_ATTACK} value={pokemon.attack} />
        <StatBar label={LABEL_DEFENSE} value={pokemon.defense} />
        <StatBar label={LABEL_SPEED} value={pokemon.speed} />
      </CardContent>
    </Card>
  );
};

export default PokemonBattleCard;
