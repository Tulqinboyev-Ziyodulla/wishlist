import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Wishlist from "@/pages/wishlist/Wishlist";
import Layotu from "@/pages/layout/Layout";
import GrandChild from "./pages/home/GrandChild";
import Cart from "./pages/cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layotu />}>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Grandchild" element={<GrandChild />} />
          <Route path="/Cart" element={<Cart />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
