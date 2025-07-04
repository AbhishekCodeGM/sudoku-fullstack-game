import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import Controls from './components/Controls';
import Navbar from './components/Navbar'; 
import { generateNewPuzzle, solvePuzzle, validateBoard } from './services/api';
import './styles/App.css';

/**
 * Main App component managing Sudoku game state with premium design
 */
function App() {
  const [board, setBoard] = useState(Array(9).fill(null).map(() => Array(9).fill(0)));
  const [originalBoard, setOriginalBoard] = useState(Array(9).fill(null).map(() => Array(9).fill(0)));
  const [selectedCell, setSelectedCell] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  // Navbar handlers
  const handleHome = () => setGameStarted(false);
  const handlePlay = () => setGameStarted(true);

  // Load initial puzzle on component mount
  useEffect(() => {
    // Don't auto-start the game, let user click to begin
  }, []);

  /**
   * Generate a new Sudoku puzzle
   */
  const handleNewGame = async () => {
    setIsLoading(true);
    setMessage('Generating new puzzle...');
    try {
      const response = await generateNewPuzzle();
      const newBoard = response.data.board;
      setBoard(newBoard);
      setOriginalBoard(newBoard.map(row => [...row])); // Deep copy
      setGameStarted(true);
      setMessage('New puzzle generated!');
      setIsValid(true);
      setSelectedCell(null);
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error generating puzzle. Please try again.');
      console.error('Error generating puzzle:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Solve the current puzzle
   */
  const handleSolve = async () => {
    setIsLoading(true);
    setMessage('Solving puzzle...');
    try {
      const response = await solvePuzzle(board);
      setBoard(response.data.board);
      setMessage('Puzzle solved!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error solving puzzle. Please try again.');
      console.error('Error solving puzzle:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Validate the current board state
   */
  const handleValidate = async () => {
    setIsLoading(true);
    setMessage('Validating board...');
    try {
      const response = await validateBoard(board);
      const valid = response.data;
      setIsValid(valid);
      setMessage(valid ? 'Board is valid!' : 'Board has conflicts!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error validating board. Please try again.');
      console.error('Error validating board:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Reset to original puzzle state
   */
  const handleReset = () => {
    setBoard(originalBoard.map(row => [...row]));
    setMessage('Board reset to original state.');
    setIsValid(true);
    setSelectedCell(null);
    setTimeout(() => setMessage(''), 3000);
  };

  /**
   * Update cell value
   */
  const handleCellChange = (row, col, value) => {
    // Only allow changes to cells that were empty in original puzzle
    if (originalBoard[row][col] !== 0) return;
    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = value;
    setBoard(newBoard);
    if (message.includes('valid') || message.includes('conflict')) {
      setMessage('');
    }
  };

  /**
   * Handle cell selection
   */
  const handleCellClick = (row, col) => {
    if (originalBoard[row][col] === 0) {
      setSelectedCell([row, col]);
    }
  };

  /**
   * Handle number input from number pad
   */
  const handleNumberInput = (num) => {
    if (selectedCell) {
      const [row, col] = selectedCell;
      handleCellChange(row, col, num);
    }
  };

  /**
   * Clear selected cell
   */
  const handleClear = () => {
    if (selectedCell) {
      const [row, col] = selectedCell;
      handleCellChange(row, col, 0);
    }
  };

  // Landing page when game hasn't started
  if (!gameStarted) {
    return (
      <div>
        <Navbar gameStarted={gameStarted} onHome={handleHome} onPlay={handlePlay} />
        <div className="landing-container">
          <div className="hero-section">
            <div className="content-wrapper">
              <div className="hero-content">
                <h1 className="hero-title">
                  SUDOKU
                  <br />
                  <span className="gradient-text">MASTERY</span>
                </h1>
                <p className="hero-description">
                  Challenge your mind with the ultimate number puzzle experience.
                  Featuring advanced algorithms, elegant design, and progressive
                  difficulty levels that adapt to your strategic thinking.
                </p>
                <button 
                  className="cta-button"
                  onClick={handleNewGame}
                  disabled={isLoading}
                >
                  {isLoading ? 'Generating...' : 'Start Game'}
                </button>
              </div>
              <div className="visual-section">
                <div className="floating-grid">
                  <div className="grid-3d">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className={`grid-cell cell-${i}`}>
                        {[1,2,3,4,5,6,7,8,9][i]}
                      </div>
                    ))}
                  </div>
                  <div className="grid-glow"></div>
                </div>
                <div className="floating-numbers">
                  {[1,2,3,4,5,6,7,8,9].map((num, i) => (
                    <div 
                      key={num} 
                      className={`floating-number num-${i}`}
                      style={{
                        animationDelay: `${i * 0.2}s`
                      }}
                    >
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Game interface
  return (
    <div>
      <Navbar gameStarted={gameStarted} onHome={handleHome} onPlay={handlePlay} />
      <div className="game-container">
        <header className="game-header">
          <h1>SUDOKU MASTERY</h1>
          {message && (
            <div className={`message ${isValid ? 'success' : 'error'}`}>
              {message}
            </div>
          )}
        </header>
        <main className="game-main">
          <div className="board-container">
            <Board 
              board={board}
              originalBoard={originalBoard}
              selectedCell={selectedCell}
              onCellChange={handleCellChange}
              onCellClick={handleCellClick}
              isValid={isValid}
            />
          </div>
          <Controls
            onNewGame={handleNewGame}
            onSolve={handleSolve}
            onValidate={handleValidate}
            onReset={handleReset}
            onNumberInput={handleNumberInput}
            onClear={handleClear}
            isLoading={isLoading}
          />
        </main>
      </div>
    </div>
  );
}

export default App;