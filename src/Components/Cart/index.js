import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function Cart() {
  const [cart, setCart] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        const cartRef = collection(db, 'carts', user.uid, 'items');
        const cartSnapshot = await getDocs(cartRef);
        const cartItems = cartSnapshot.docs.map(doc => doc.data());
        setCart(cartItems);
      }
    };

    fetchCart();
  }, [user]);

  const addToCart = async (product) => {
    if (user) {
      const cartRef = collection(db, 'carts', user.uid, 'items');
      await addDoc(cartRef, product);
      setCart([...cart, product]);
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.Nazwa} - {item.Cena} PLN
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;