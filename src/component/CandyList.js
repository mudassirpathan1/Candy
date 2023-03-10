import React, { useState } from "react";
import Candy from "./Candy";

const candies=[
  {id:1, name:'chocolate bar', description: 'A delicious bar of chocolate', price: 5},
  {id:2, name:'Eclair', description: 'A delicious chocolate', price: 2},
  {id:3, name:'American Chocolate', description: 'Delicious', price: 10}
];

function CandyList(){
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCandies = candies.filter(candy =>
    candy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchInputChange} />
      {filteredCandies.map(candy => (
        <Candy
          key={candy.id}
          name={candy.name}
          description={candy.description}
          price={candy.price}
        />
      ))}
    </div>
  );
}

export default CandyList;
