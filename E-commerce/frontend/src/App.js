import { useEffect } from "react";
import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import Navbar from "./Scenes/Globals/Navbar";
import Item from "./Scenes/ItemDetails/Itemdetails";
import Checkout from "./Scenes/checkout/Checkout";
import Confirmation from "./Scenes/checkout/Confirmation";

import Home from "./Scenes/Home/home";
import CartMenu from "./Scenes/Globals/CartMenu";
import Footer from "./Scenes/Globals/Footer";


const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0,0)
  }, [pathname]);
  return null;
}

function App() {
  
  return (
    <BrowserRouter>
   


      <Navbar/>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:itemId" element={< Item />} />
        <Route path="/checkout" element={< Checkout/>} />
        <Route path="/checkout/success" element={<Confirmation/>} />
        </Routes>
        <CartMenu/>
        <Footer/>

   
      </BrowserRouter>
  );
}

export default App;
