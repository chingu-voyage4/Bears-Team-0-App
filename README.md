# Bears-Team- Voyage-4

# Quizzly Bear API

## Getting Started
- Connect databases by creating a dev.js file in the config folder.
- Run server by entering "npm run dev" in terminal and the server will run on local port 3001 by default.
  - You may change this in package.json file.

### For quizzes

#### Get number of total quizzes:
- Request type: GET
- Path: /api/quizzes/count
- Params: {}
- Returns: Total count of quizzes

#### Get all quizzes:
- Request type: GET
- Path: /api/quizzes/
- Params: {}
- Returns: {Quiz[]} - An array of quizzes

#### Create new quiz:
- Request type: POST
- Path: /api/quizzes/
- Params: {Object} - Ex:
    ```
    {
      "quiz": {
        "title": "test title",
        "questions": ["test question 1", "test question 2"]
      }
    }
    ```
- Returns: {Quiz} - The created and saved quiz.

#### Get quiz by id:
- Request type: GET
- Path: /api/quizzes/:id
- Params: {String} - key: quiz._id
- Returns: {Quiz} - The quiz that was found

#### Update quiz by id:
- Request type: PUT
- Path: /api/quizzes/:id
- Params: 
  - {String} - key: quiz._id
  - {UpdatedObj} - in request body as "update"
  - Ex of UpdatedObj request body:
  ```
  {
    "update": {
      "title": "updated title",
      "questions": ["updated question 1", "updated question 2"]
    }
  }
  ```
- Returns: {Quiz} - The quiz and its updated values.

#### Delete quiz by id:
- Request type: DELETE
- Path: /api/quizzes/:id
- Params: {String} - key: quiz._id
- Returns: {Quiz} - The quiz that was deleted
