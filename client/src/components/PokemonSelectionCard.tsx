import { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Pokemon } from "../types/Pokemon";

interface PokemonSelectionCardProps {
  pokemon: Pokemon;
  isSelected: boolean;
  onClick: () => void;
}

const PokemonSelectionCard: FC<PokemonSelectionCardProps> = ({
  pokemon,
  isSelected,
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        cursor: "pointer",
        border: isSelected ? "2px solid blue" : "none",
        "&:hover": { boxShadow: 3 },
      }}
    >
      <CardContent>
        <img
          src={pokemon.imageUrl}
          alt={pokemon.name}
          style={{ width: "100%", height: "auto" }}
        />
        <Typography variant="subtitle1" align="center">
          {pokemon.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonSelectionCard;
