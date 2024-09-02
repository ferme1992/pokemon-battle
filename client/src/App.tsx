import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PokemonBattleUI from "./components/PokemonBattleUI";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonBattleUI />} />
      </Routes>
    </Router>
  );
}

export default App;
