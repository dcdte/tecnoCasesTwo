import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import Main from "./views";
import Cases from "./views/Cases";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/1hora" element={<UnaHora />}></Route>
        <Route path="/supercase" element={<Cases />} />
        <Route path="/ubicacionaliados" element={<Aliados />}></Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
