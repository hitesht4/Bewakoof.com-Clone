import Accessories from "./Pages/Accessories";
import { Routes, Route } from "react-router-dom";
import Women from "./Pages/CategoriesWomen";
import Men from "./Pages/CategoriesMen";
import Home from "./Pages/Home";
import Navabar from "./Components/Home/Navabar";
import Mens from "./Pages/Mens";
import Product from "./Pages/Product";
import Womens from "./Pages/Womens";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Navigator from "./Components/Payement/Navigator";
import Payment from "./Pages/Payment";
import Card from "./Components/Payement/Cards";
import RequiredAuth from "./Components/Hoc/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Navabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Men />} />
        <Route path="/categories/Women" element={<Women />} />
        <Route path="/categories/accessories" element={<Accessories />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/Product/:_id" element={<Product />} />
        <Route
          path="/cart"
          element={
            <RequiredAuth>
              <Cart />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <RequiredAuth>
              <Payment />
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
