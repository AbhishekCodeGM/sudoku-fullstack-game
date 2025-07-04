package com.sudoku.model;

/**
 * Represents a Sudoku board with validation and utility methods
 */
public class SudokuBoard {
    private int[][] board;
    
    public SudokuBoard() {
        this.board = new int[9][9];
    }
    
    public SudokuBoard(int[][] board) {
        this.board = board;
    }
    
    public int[][] getBoard() {
        return board;
    }
    
    public void setBoard(int[][] board) {
        this.board = board;
    }
    
    /**
     * Check if the current board state is valid
     */
    public boolean isValid() {
        // Check rows
        for (int i = 0; i < 9; i++) {
            if (!isValidUnit(getRow(i))) return false;
        }
        
        // Check columns
        for (int j = 0; j < 9; j++) {
            if (!isValidUnit(getColumn(j))) return false;
        }
        
        // Check 3x3 boxes
        for (int box = 0; box < 9; box++) {
            if (!isValidUnit(getBox(box))) return false;
        }
        
        return true;
    }
    
    private boolean isValidUnit(int[] unit) {
        boolean[] seen = new boolean[10]; // 1-9
        for (int num : unit) {
            if (num != 0) {
                if (seen[num]) return false;
                seen[num] = true;
            }
        }
        return true;
    }
    
    private int[] getRow(int row) {
        return board[row];
    }
    
    private int[] getColumn(int col) {
        int[] column = new int[9];
        for (int i = 0; i < 9; i++) {
            column[i] = board[i][col];
        }
        return column;
    }
    
    private int[] getBox(int boxIndex) {
        int[] box = new int[9];
        int startRow = (boxIndex / 3) * 3;
        int startCol = (boxIndex % 3) * 3;
        int idx = 0;
        
        for (int i = startRow; i < startRow + 3; i++) {
            for (int j = startCol; j < startCol + 3; j++) {
                box[idx++] = board[i][j];
            }
        }
        return box;
    }
}