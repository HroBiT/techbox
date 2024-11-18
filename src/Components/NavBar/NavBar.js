import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">TechBox</div>
        <div>
          {user ? (
            <>
              <Link to="/cart" className="text-white px-4 py-2 rounded hover:bg-gray-700">Cart</Link>
              <button onClick={handleLogout} className="text-white px-4 py-2 rounded hover:bg-gray-700">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white px-4 py-2 rounded hover:bg-gray-700">Login</Link>
              <Link to="/register" className="text-white px-4 py-2 rounded hover:bg-gray-700">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;