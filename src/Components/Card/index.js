import React from 'react';

function Card({ Nazwa, Cena, Specyfikacja, Image, addToCart }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={Image} alt={Nazwa} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{Nazwa}</h3>
        <p className="text-gray-600">{Specyfikacja}</p>
        <p className="text-gray-800 font-bold">{Cena} PLN</p>
        <button
          onClick={() => addToCart({ Nazwa, Cena, Specyfikacja, Image })}
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;