import React from 'react';
import Navbar from '../../NavBar/NavBar';
import Card from '../Card';

function Home() {
  const cardsData = [
    {
      Nazwa: "G4M3R HERO PLUS R7-7800X3D",
      Cena: 13500,
      Specyfikacja: "AMD Ryzen 7 7800X3D, NVIDIA RTX 4080, 64GB RAM",
      Image: "kobieta.jpg", 
    },
    {
      Nazwa: "Silver Monkey X Battlestation",
      Cena: 4200,
      Specyfikacja: "Intel Core i5-12400F, NVIDIA RTX 4060 Ti, 16GB RAM",
      Image: "kobieta.jpg",
    },
    {
      Nazwa: "Acer Nitro 50",
      Cena: 4699,
      Specyfikacja: "AMD Ryzen 5 7600, Radeon RX 7600, 32GB RAM",
      Image: "kobieta.jpg", 
    },
    {
      Nazwa: "Lenovo Legion T5",
      Cena: 5099,
      Specyfikacja: "Intel Core i5-14400F, NVIDIA RTX 4060, 32GB RAM",
      Image: "kobieta.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              Nazwa={card.Nazwa}
              Cena={card.Cena}
              Specyfikacja={card.Specyfikacja}
              Image={card.Image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;