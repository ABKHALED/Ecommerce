import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
import Product from "./pages/product/Product";
import Store from "./pages/store/Store";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Favotite from "./pages/favorite/Favotite";
import Cart from "./pages/cart/Cart";
import Location from "./pages/location/Location";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/shop" element={<Store />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="favorit" element={<Favotite />} />
        <Route path="cart" element={<Cart />} />
        <Route path="location" element={<Location />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
