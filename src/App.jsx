import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Help from "./components/Help";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/help" element={<Help />} />
            <Route path="/cart" element={<Cart />} />
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
