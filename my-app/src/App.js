import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
