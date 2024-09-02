import { Box, LinearProgress, Typography } from "@mui/material";
import { FC } from "react";

interface StatBarProps {
  label: string;
  value: number;
}

const StatBar: FC<StatBarProps> = ({ label, value }) => (
  <Box display="flex" alignItems="center" mb={1}>
    <Typography variant="body2" minWidth={60}>
      {label}
    </Typography>
    <LinearProgress
      variant="determinate"
      value={value * 10}
      color="primary"
      sx={{ flexGrow: 1, height: 10, borderRadius: 5 }}
    />
  </Box>
);

export default StatBar;
