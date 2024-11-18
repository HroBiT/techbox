import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar/NavBar';
import Card from '../Card';
import Cart from '../Cart';
import { auth, db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function Home() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchCardsData = async () => {
      const cardsCollection = collection(db, 'cards');
      const cardsSnapshot = await getDocs(cardsCollection);
      const cardsList = cardsSnapshot.docs.map(doc => doc.data());
      setCardsData(cardsList);
    };

    fetchCardsData();
  }, []);

  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (user) {
      try {
        const cartRef = collection(db, 'carts', user.uid, 'items');
        const docRef = await addDoc(cartRef, product);
        console.log("Product added to cart:", product);
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    } else {
      console.log("User is not authenticated");
    }
  };

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
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;