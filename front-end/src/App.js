import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
import ProductScreen from "./screens/productScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Amazon-Sh</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
