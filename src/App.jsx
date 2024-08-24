
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import "./app.scss";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function Layout() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}></Route>
          <Route path="/products/:id" element={<Products/>}></Route>
          <Route path="/product/:id" element={<Product/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
