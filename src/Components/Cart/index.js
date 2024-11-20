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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <ul className="list-none p-0">
        {cart.map((item, index) => (
          <li className="border rounded-xl p-5 m-4 flex justify-between items-center" key={index}>
            <span>{item.Nazwa} - {item.Cena} PLN</span>
            <button className="bg-red-600 text-white p-2 rounded-xl hover:bg-red-700" onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;