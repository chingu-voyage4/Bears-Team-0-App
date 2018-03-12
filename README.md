# Bears-Team- Voyage-4

# Quizzly Bear API

## Getting Started
- Connect databases by creating a dev.js file in the config folder.
- Run server by entering "npm run dev" in terminal and the server will run on local port 3001 by default.
  - You may change this in package.json file.

### For quizzes:
----------------------------

#### Get number of total quizzes:
- Request type: GET
- Path: /api/quizzes/count
- Params: {}
- Returns: Total count of quizzes

#### Get all quizzes:
- Request type: GET
- Path: /api/quizzes/all
- Params: {}
- Returns: {Quiz[]} - An array of quizzes

#### Get user's quizzes:
- Request type: POST
- Path: /api/quizzes/userQuizzes
- Params: {Object} - Ex:
    ```
    {
      "user": {
        "id": "testUserId"
      }
    }
    ```
- Returns: {Quiz[]} - An array of the user's quizzes.

#### Create new quiz:
- Request type: POST
- Path: /api/quizzes/
- Params: {Object} - Ex:
    ```
    {
      "quiz": {
        "title": "test title",
        "description": "this is a test description for a test quiz."
        "questions": ["test question 1", "test question 2"]
      },
      "user": {
        "id": "testUserId"
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


### For Users:
----------------------------


#### Get number of total users:
- Request type: GET
- Path: /api/users/count
- Params: {}
- Returns: Total count of users

#### Get all users:
- Request type: GET
- Path: /api/users/
- Params: {}
- Returns: {User[]} - An array of users

#### Create new user:
- Request type: POST
- Path: /api/users/
- Params: {Object} - Ex:
    ```
    {
      "user": {
        "username": "testUser",
        "roles": ["test role 1", "test role 2"]
      }
    }
    ```
- Returns: {User} - The created and saved user.

#### Get user by id:
- Request type: GET
- Path: /api/users/:id
- Params: {String} - key: user._id
- Returns: {User} - The user that was found

#### Update user by id:
- Request type: PUT
- Path: /api/users/:id
- Params: 
  - {String} - key: user._id
  - {UpdatedObj} - in request body as "update"
  - Ex of UpdatedObj request body:
  ```
  {
    "update": {
      "username": "updatedUserName",
      "roles": ["updated role 1", "updated role 2"]
    }
  }
  ```
- Returns: {User} - The user and its updated values.

#### Delete user by id:
- Request type: DELETE
- Path: /api/users/:id
- Params: {String} - key: user._id
- Returns: {User} - The user that was deleted
