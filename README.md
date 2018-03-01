# Bears-Team- Voyage-4

# Quizzly Bear API

## Getting Started
- Connect databases by creating a dev.js file in the config folder.
- Run server by entering "npm run dev" in terminal and the server will run on local port 3001 by default.
  - You may change this in package.json file.

### For quizzes

#### Create new quiz:
- Request type: POST
- Path: /api/quizzes/new
- Notes: Currently creates a hardcoded quiz and adds to db.

#### Read single quiz:
- Request type: GET
- Path: /api/quizzes/
- Notes: Currently returns json of a hardcoded quiz by id.

#### Read all quizzes:
- Request type: GET
- Path: /api/quizzes/all
- Notes: Returns json of all quizzes and logs amount of quizzes

#### Delete single quiz:
- Request type: POST
- Path: /api/quizzes/deleteHardCodedQuiz
- Notes: Currently deletes a hardcoded quiz by id.

#### Add question to quiz:
- Request type: POST
- Path: /api/quizzes/addquestion
- Notes: Takes question and form parameters in request body and adds it to hardcoded quiz.