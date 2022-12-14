import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import ZonesSelect from "./components/ZonesSelect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ZonesSelect />} />
        <Route path=":slug" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
