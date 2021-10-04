import React from 'react';

function BurgerMenu({ toggleMenu, isMenuOpen }) {
  return (
    <button
      className={`burger-menu btn ${isMenuOpen ? 'burger-menu_opened' : ''}`}
      type="button"
      aria-label="меню"
      onClick={toggleMenu}>
    </button>
  );
}

export default BurgerMenu;
