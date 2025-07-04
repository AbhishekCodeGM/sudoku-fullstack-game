import React from 'react';

const Navbar = ({ gameStarted, onHome, onPlay }) => (
  <nav className="navbar">
    <div className="navbar-title">Sudoku Mastery</div>
    <div className="navbar-links">
      <button className="navbar-btn" onClick={onHome} disabled={!gameStarted}>
        Home
      </button>
      <button className="navbar-btn" onClick={onPlay} disabled={gameStarted}>
        Play
      </button>
    </div>
  </nav>
);

export default Navbar;