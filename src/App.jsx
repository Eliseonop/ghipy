import "./App.css";
import Home from "./pages/Home";
import { Navegator } from "./pages/Navegator";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Search from "./pages/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navegator />

        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/:name" element={<Home />} />
          </Route>
          {/* <Route path="/search/:name" element={<Search />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
