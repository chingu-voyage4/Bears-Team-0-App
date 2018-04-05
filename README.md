# Bears-Team- Voyage-4

# Quizzly Bear API

## Getting Started
- Connect databases by creating a dev.js file in the config folder.
- Run server by entering "npm run dev" in terminal and the server will run on local port 3001 by default.
- You may change this in index.js file.

### For quizzes:
----------------------------

#### Get user's quizzes:  
- Requires Login  
- Request type: GET  
- Path: /api/quizzes/  
- Returns: [] - An array of the current user's quizzes.  

#### Create new quiz:
- Requires Login    
- Request type: POST  
- Path: /api/quizzes/  
- Params: {Object} - Ex:
    ```
    {
      "title": "test title",
      "description": "this is a test description for a test quiz.",
      "questions": ["test question 1", "test question 2"]
    }
    ```
- Returns: {Quiz} - The created and saved quiz.

#### Get quiz by id:  
- Requires Login (Verify with team if this is necessary)
- Request type: GET
- Path: /api/quizzes/:id
- Params: {String} - key: quiz._id
- Returns: {Quiz} - The quiz that was found

#### Update quiz by id:
- Requires Login   
- Request type: PUT
- Path: /api/quizzes/:id
- Params: 
  - {String} - key: quiz._id
  - {UpdatedObj} - in request body
  - Ex of UpdatedObj request body:
  ```
  {
    "title": "updated title",
    "description": "updated description"
    "questions": ["updated question 1", "updated question 2"]
  }
  ```
- Returns: {Quiz} - The quiz and its updated values.

#### Update quiz favorites by id:
- Requires Login   
- Request type: PATCH
- Path: /api/quizzes/:id
- Params: 
  - {String} - key: quiz._id
  - {UpdatedObj} - in request body as "favChange"
  - Ex of UpdatedObj request body:
  ```
  {
    "favChange": 1
  }
  ```
- Returns: {Quiz} - The quiz and its updated values.

#### Delete quiz by id:
- Requires Login   
- Request type: DELETE
- Path: /api/quizzes/:id
- Params: {String} - key: quiz._id
- Returns: {Quiz} - The quiz that was deleted


### For Users:
----------------------------

#### Users are created using Passport Google OAuth Login
#### Deletion of users is not possible via API

#### Get current user:
- Requires Login
- Request type: GET
- Path: /api/users/currentUser
- Returns: {User} - The current user that was found

#### Get user by id:
- Requires Login (Verify with team if this is necessary)
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
    displayName = "updated display name"
    familyName = "updated last/fmaily name"
    givenName = "updated first/given name"
    gender = "updated gender" (male, female, other)
  }
  ```
- Returns: {User} - The user and its updated values.