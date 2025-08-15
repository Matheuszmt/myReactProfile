import React, { useState } from "react";
import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='NavBar'>
      {/* Botão hamburger (aparece só no mobile) */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Menu */}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <button>Home<span></span></button>
        </li>
        <li>
          <button>About<span></span></button>
        </li>
        <li>
          <button>Projects<span></span></button>
        </li>
        <li>
          <button>Contact<span></span></button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
