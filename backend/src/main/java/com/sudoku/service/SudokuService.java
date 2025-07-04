package com.sudoku.service;

import com.sudoku.model.SudokuBoard;
import org.springframework.stereotype.Service;
import java.util.Random;

/**
 * Service class containing Sudoku game logic
 */
@Service
public class SudokuService {
    private Random random = new Random();
    
    /**
     * Generate a new Sudoku puzzle
     */
    public SudokuBoard generatePuzzle() {
        int[][] board = new int[9][9];
        
        // Fill diagonal 3x3 boxes first (they don't affect each other)
        fillDiagonalBoxes(board);
        
        // Fill remaining cells
        solveSudoku(board);
        
        // Remove numbers to create puzzle (keep 25-35 numbers for medium difficulty)
        removeNumbers(board, 46 + random.nextInt(10));
        
        return new SudokuBoard(board);
    }
    
    /**
     * Solve a given Sudoku board
     */
    public SudokuBoard solvePuzzle(int[][] board) {
        int[][] solution = deepCopy(board);
        solveSudoku(solution);
        return new SudokuBoard(solution);
    }
    
    /**
     * Validate if a board configuration is valid
     */
    public boolean validateBoard(int[][] board) {
        return new SudokuBoard(board).isValid();
    }
    
    private void fillDiagonalBoxes(int[][] board) {
        for (int i = 0; i < 9; i += 3) {
            fillBox(board, i, i);
        }
    }
    
    private void fillBox(int[][] board, int row, int col) {
        boolean[] used = new boolean[10];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                int num;
                do {
                    num = random.nextInt(9) + 1;
                } while (used[num]);
                used[num] = true;
                board[row + i][col + j] = num;
            }
        }
    }
    
    private boolean solveSudoku(int[][] board) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == 0) {
                    for (int num = 1; num <= 9; num++) {
                        if (isValidMove(board, row, col, num)) {
                            board[row][col] = num;
                            if (solveSudoku(board)) {
                                return true;
                            }
                            board[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    
    private boolean isValidMove(int[][] board, int row, int col, int num) {
        // Check row
        for (int j = 0; j < 9; j++) {
            if (board[row][j] == num) return false;
        }
        
        // Check column
        for (int i = 0; i < 9; i++) {
            if (board[i][col] == num) return false;
        }
        
        // Check 3x3 box
        int boxRow = (row / 3) * 3;
        int boxCol = (col / 3) * 3;
        for (int i = boxRow; i < boxRow + 3; i++) {
            for (int j = boxCol; j < boxCol + 3; j++) {
                if (board[i][j] == num) return false;
            }
        }
        
        return true;
    }
    
    private void removeNumbers(int[][] board, int count) {
        while (count > 0) {
            int row = random.nextInt(9);
            int col = random.nextInt(9);
            if (board[row][col] != 0) {
                board[row][col] = 0;
                count--;
            }
        }
    }
    
    private int[][] deepCopy(int[][] original) {
        int[][] copy = new int[9][9];
        for (int i = 0; i < 9; i++) {
            System.arraycopy(original[i], 0, copy[i], 0, 9);
        }
        return copy;
    }
}