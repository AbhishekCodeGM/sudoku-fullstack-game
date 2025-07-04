import axios from 'axios';

// Base URL for backend API
const BASE_URL = 'http://localhost:8080/api/sudoku';

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

/**
 * Generate a new Sudoku puzzle
 */
export const generateNewPuzzle = () => {
  return api.get('/new');
};

/**
 * Solve a given Sudoku board
 */
export const solvePuzzle = (board) => {
  return api.post('/solve', { board });
};

/**
 * Validate a Sudoku board
 */
export const validateBoard = (board) => {
  return api.post('/validate', { board });
};

// Add request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log('Making API request:', config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;