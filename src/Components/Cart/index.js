import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

function Cart() {
  const [cart, setCart] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        const cartRef = collection(db, 'carts', user.uid, 'items');
        const cartSnapshot = await getDocs(cartRef);
        const cartItems = cartSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCart(cartItems);
      }
    };

    fetchCart();
  }, [user]);

  const removeFromCart = async (productId) => {
    if (user) {
      try {
        const productRef = doc(db, 'carts', user.uid, 'items', productId);
        await deleteDoc(productRef);
        setCart(cart.filter(item => item.id !== productId));
        console.log("Product removed from cart:", productId);
      } catch (error) {
        console.error("Error removing product from cart:", error);
      }
    } else {
      console.log("User is not authenticated");
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.Nazwa} - {item.Cena} PLN
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;