import React,{ useState} from "react";

import CandyList from "./component/CandyList";
import Cart from "./component/Cart";
import Candy from "./component/Candy";
import Navbar from "./component/Navbar";

function App() {
const [cartItems, setCartItems] = useState([]);

const handleAddTocart = (candy) =>{
  setCartItems ([...cartItems,candy]);
}
 return(
  <div>
    <Navbar/>
    <Candy/>
    
    <CandyList onAddToCart={handleAddTocart}/>
    <Cart items={cartItems}/>
  </div>
 );
}

export default App;
