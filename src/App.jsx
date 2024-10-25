import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Help from "./pages/Help";
import Cart from "./pages/Cart";
import RestaurantMenu from "./pages/RestaurantMenu";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/restaurants/:id" element={<RestaurantMenu />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

/*
  I want to create a basic routing setup for this app, 
  Header and Footer will be present in all the pages,
  Body will be having different sections, like:
  - "/"  <Body />
  - "/help" <Help/>
  - "/cart" <Cart/>
  - "/restaurants/id" <RestaurantMenu/>

*/
