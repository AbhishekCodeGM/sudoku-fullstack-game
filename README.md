🧩 Sudoku API - Java Spring Boot Backend
A RESTful backend service for generating, solving, and validating 9×9 Sudoku puzzles. Built with Java and Spring Boot, this microservice powers any web or mobile front‑end to deliver interactive Sudoku gameplay.

🚀 Features
Generate Puzzle
Create a new Sudoku board with a specified number of givens (clues).

Solve Puzzle
Submit a full or partially‑filled board to receive the solved puzzle.

Validate Board
Check whether a given board configuration is valid according to Sudoku rules.

📦 Tech Stack
Layer	Technology
Language	Java 17+
Framework	Spring Boot 3.x
Build Tool	Maven (wrapper included)
Testing	JUnit & Spring Test



📁 Project Structure
pgsql
Copy
Edit
backend/
├── .mvn/                   # Maven wrapper files
├── mvnw*                   # Maven wrapper scripts
├── pom.xml                 # Maven configuration
├── HELP.md                 # Getting‑started tips
├── src/
│   ├── main/
│   │   ├── java/com/sudoku/
│   │   │   ├── SudokuApplication.java     # Spring Boot entry point
│   │   │   ├── controller/SudokuController.java
│   │   │   ├── service/SudokuService.java
│   │   │   └── model/
│   │   │       ├── SudokuBoard.java
│   │   │       └── SudokuRequest.java
│   │   └── resources/
│   │       └── application.properties     # App configuration
│   └── test/                              # Unit & integration tests
└── README.md               # ← You are here
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

Built with ❤️ and ☕ by Abhishek Chaudhuri
