import React from 'react';

/**
 * Game controls component with premium design including number pad
 */
const Controls = ({ onNewGame, onSolve, onValidate, onReset, onNumberInput, onClear, isLoading }) => {
  return (
    <div className="controls-panel">
      <div className="number-pad">
        <h3 className="pad-title">Numbers</h3>
        <div className="number-grid">
          {[1,2,3,4,5,6,7,8,9].map(num => (
            <button
              key={num}
              className="number-btn"
              onClick={() => onNumberInput(num)}
              disabled={isLoading}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
      
      <div className="action-buttons">
        <h3 className="actions-title">Actions</h3>
        <button 
          className="action-btn new-game"
          onClick={onNewGame} 
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'New Game'}
        </button>
        
        <button 
          className="action-btn solve"
          onClick={onSolve} 
          disabled={isLoading}
        >
          Solve
        </button>
        
        <button 
          className="action-btn validate"
          onClick={onValidate} 
          disabled={isLoading}
        >
          Validate
        </button>
        
        <button 
          className="action-btn reset"
          onClick={onReset} 
          disabled={isLoading}
        >
          Reset
        </button>
        
        <button 
          className="action-btn clear"
          onClick={onClear}
          disabled={isLoading}
        >
          Clear Cell
        </button>
      </div>
    </div>
  );
};

export default Controls;