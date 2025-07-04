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

yaml
Copy
Edit

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Java 17+
- Git (to clone the repo)
- Maven (or use the included wrapper)

### 🔧 Setup

```bash
git clone https://github.com/your-username/sudoku-backend.git
cd sudoku-backend
./mvnw clean package
▶️ Run the App
bash
Copy
Edit
# Method 1: Using Maven wrapper
./mvnw spring-boot:run

# Method 2: Run the JAR
java -jar target/sudoku-0.0.1-SNAPSHOT.jar
App will start on: http://localhost:8080

📡 API Reference
Base URL: http://localhost:8080/api/sudoku

Method	Endpoint	Description
GET	/generate?clues={n}	Generate a new puzzle with n clues
POST	/solve	Solve a given board
POST	/validate	Check if a board is valid

🧪 Example: Generate Puzzle
bash
Copy
Edit
curl http://localhost:8080/api/sudoku/generate?clues=25
🧠 Example: Solve Puzzle
bash
Copy
Edit
curl -X POST http://localhost:8080/api/sudoku/solve \
  -H "Content-Type: application/json" \
  -d '{
        "board": [
          [5,3,0,0,7,0,0,0,0],
          [6,0,0,1,9,5,0,0,0],
          ...
        ]
      }'
🧪 Running Tests
bash
Copy
Edit
./mvnw test
Test cases are located under src/test/.

🛣️ Roadmap
 Add difficulty presets (Easy / Medium / Hard)

 Add Docker support for deployment

 Rate-limiting and logging

 Connect to frontend game UI

 Add Swagger/OpenAPI documentation

🤝 Contributing
Contributions are welcome!

Fork the repository

Create a new branch: git checkout -b feature/your-feature

Commit your changes

Push to your fork

Submit a Pull Request

📄 License
Licensed under the MIT License.

Built with ☕ Java and ❤️ Spring Boot by Abhishek Chaudhuri

yaml
Copy
Edit

---

