# 🧩 Sudoku API - Java Spring Boot Backend

A RESTful backend service for generating, solving, and validating 9×9 Sudoku puzzles. Built with **Java 17+** and **Spring Boot 3.x**, this backend can support any web or mobile client with Sudoku functionality.

---

## 🚀 Features

- 🎲 **Generate** new Sudoku puzzles with customizable clue counts
- 🧠 **Solve** complete or partially filled Sudoku boards
- ✅ **Validate** Sudoku board correctness
- 🌱 Lightweight, fast, and modular Spring Boot architecture

---

## 📦 Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Language  | Java 17+                |
| Backend   | Spring Boot 3.x         |
| Build     | Maven + Wrapper         |
| Testing   | JUnit, Spring Test      |
| Format    | JSON API                |

---

## 📁 Project Structure

backend/
├── .mvn/ # Maven wrapper
├── mvnw / mvnw.cmd # Maven wrapper scripts
├── pom.xml # Maven configuration
├── src/
│ ├── main/
│ │ ├── java/com/sudoku/
│ │ │ ├── SudokuApplication.java
│ │ │ ├── controller/SudokuController.java
│ │ │ ├── service/SudokuService.java
│ │ │ └── model/
│ │ │ ├── SudokuBoard.java
│ │ │ └── SudokuRequest.java
│ │ └── resources/
│ │ └── application.properties
│ └── test/
│ └── java/... # Unit & integration tests
└── README.md # This file

⚙️ Getting Started
Prerequisites
Java 17 (or later) installed and on your PATH

Git (to clone the repo)

Clone & Build
bash
Copy
Edit
git clone https://github.com/your-username/sudoku-backend.git
cd sudoku-backend
./mvnw clean package
Run Locally
bash
Copy
Edit
# Using Maven wrapper
./mvnw spring-boot:run

# Or run the built JAR
java -jar target/sudoku-0.0.1-SNAPSHOT.jar
By default, the service listens on port 8080.

📜 API Reference
All endpoints are under /api/sudoku and expect/return JSON.

Method	Endpoint	Request Body	Response	Description
GET	/api/sudoku/generate?clues={n}	n (optional, default 30)	int[9][9]	Generate new board with n clues
POST	/api/sudoku/solve	{ "board": int[9][9] }	int[9][9]	Solve the submitted board
POST	/api/sudoku/validate	{ "board": int[9][9] }	boolean	Is the board configuration valid?

Example: Generate Puzzle
bash
Copy
Edit
curl http://localhost:8080/api/sudoku/generate?clues=25
Example: Validate Board
bash
Copy
Edit
curl -X POST http://localhost:8080/api/sudoku/validate \
     -H "Content-Type: application/json" \
     -d '{
           "board": [
             [5,3,0,0,7,0,0,0,0],
             [6,0,0,1,9,5,0,0,0],
             ...
           ]
         }'
🧪 Testing
bash
Copy
Edit
./mvnw test
Your unit and integration tests will run under src/test/java.

📌 Roadmap / TODO
 Add difficulty presets (Easy / Medium / Hard)

 Caching for repeated puzzle generation

 Rate‑limiting & API key protection

 Deployment guides (Docker / Kubernetes)

🙌 Contributing
Fork the repo

Create a feature branch (git checkout -b feature/XYZ)

Commit your changes

Push to your fork

Submit a Pull Request

Please follow the standard GitHub flow.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

Built with ❤️ and ☕ by [Your Name]

