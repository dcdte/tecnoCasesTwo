import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import Main from "./views";
import Cases from "./views/Cases";
import UnaHora from "./components/UnaHora";
import Aliados from "./components/Aliados";
import { SearchImei } from "./components/SearchImei";
import { useLocation } from "react-router-dom";
import { Stores } from "./components/Stores";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/1hora" element={<UnaHora />}></Route>
        <Route path="/supercase" element={<Cases />} />
        <Route path="/ubicacionaliados" element={<Aliados />}></Route>
        <Route path="/imei" element={<SearchImei />}></Route>
        <Route path="/tiendas" element={<Stores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
