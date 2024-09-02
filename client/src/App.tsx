import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
