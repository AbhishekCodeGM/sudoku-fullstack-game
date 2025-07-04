import React from 'react';
import Cell from './Cell';

/**
 * Sudoku board component rendering 9x9 grid with premium design
 */
const Board = ({ board, originalBoard, selectedCell, onCellChange, onCellClick, isValid }) => {
  return (
    <div className="sudoku-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cellValue, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cellValue}
              row={rowIndex}
              col={colIndex}
              isOriginal={originalBoard[rowIndex][colIndex] !== 0}
              isSelected={selectedCell && selectedCell[0] === rowIndex && selectedCell[1] === colIndex}
              onChange={onCellChange}
              onClick={onCellClick}
              isValid={isValid}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;