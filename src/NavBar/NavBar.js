import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">TechBox</div>
        <div>
          <Link to="/login" className="text-white px-4 py-2 rounded hover:bg-gray-700">Login</Link>
          <Link to="/register" className="text-white px-4 py-2 rounded hover:bg-gray-700">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;