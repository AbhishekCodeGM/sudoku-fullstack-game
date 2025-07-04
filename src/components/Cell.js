import React from 'react';

/**
 * Individual Sudoku cell component with premium styling
 */
const Cell = ({ value, row, col, isOriginal, isSelected, onChange, onClick, isValid }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    
    // Allow empty or single digit 1-9
    if (inputValue === '' || (inputValue.length === 1 && /^[1-9]$/.test(inputValue))) {
      const numValue = inputValue === '' ? 0 : parseInt(inputValue);
      onChange(row, col, numValue);
    }
  };

  const handleClick = () => {
    onClick(row, col);
  };

  const getCellClasses = () => {
    let classes = 'sudoku-cell';
    
    if (isOriginal) {
      classes += ' original';
    } else {
      classes += ' editable';
    }
    
    if (isSelected) {
      classes += ' selected';
    }
    
    if (!isValid) {
      classes += ' invalid';
    }
    
    // Add border classes for 3x3 box separation
    if (row % 3 === 2 && row < 8) classes += ' border-bottom';
    if (col % 3 === 2 && col < 8) classes += ' border-right';
    
    return classes;
  };

  return (
    <div
      className={getCellClasses()}
      onClick={handleClick}
    >
      <input
        type="text"
        value={value === 0 ? '' : value}
        onChange={handleChange}
        disabled={isOriginal}
        maxLength="1"
        inputMode="numeric"
        className="cell-input"
        tabIndex={isOriginal ? -1 : 0}
      />
    </div>
  );
};

export default Cell;