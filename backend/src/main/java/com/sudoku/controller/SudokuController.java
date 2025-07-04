package com.sudoku.controller;

import com.sudoku.model.SudokuBoard;
import com.sudoku.model.SudokuRequest;
import com.sudoku.service.SudokuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST Controller for Sudoku game operations
 */
@RestController
@RequestMapping("/api/sudoku")
@CrossOrigin(origins = "http://localhost:3000")
public class SudokuController {
    
    @Autowired
    private SudokuService sudokuService;
    
    /**
     * Generate a new Sudoku puzzle
     */
    @GetMapping("/new")
    public ResponseEntity<SudokuBoard> generateNewPuzzle() {
        try {
            SudokuBoard puzzle = sudokuService.generatePuzzle();
            return ResponseEntity.ok(puzzle);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
    
    /**
     * Solve a given Sudoku board
     */
    @PostMapping("/solve")
    public ResponseEntity<SudokuBoard> solvePuzzle(@RequestBody SudokuRequest request) {
        try {
            SudokuBoard solution = sudokuService.solvePuzzle(request.getBoard());
            return ResponseEntity.ok(solution);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    /**
     * Validate a Sudoku board configuration
     */
    @PostMapping("/validate")
    public ResponseEntity<Boolean> validateBoard(@RequestBody SudokuRequest request) {
        try {
            boolean isValid = sudokuService.validateBoard(request.getBoard());
            return ResponseEntity.ok(isValid);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(false);
        }
    }
}