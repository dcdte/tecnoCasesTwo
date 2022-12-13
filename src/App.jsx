import { Navigate, Route, Router } from "react-router-dom";
import Home from "./components/Home";
import ZonesSelect from "./components/ZonesSelect";

function App() {
  return (
    <Router>
      <Route path="/" element={<ZonesSelect />} />
      <Route path=":slug" element={<Home />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Router>
  );
}

export default App;
