// slightly modified
// from Dan Abramov's video on persisting state to local storage
// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("makeQuizzes");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state.makeQuizzes);
    localStorage.setItem("makeQuizzes", serializedState);
  } catch (err) {
    console.log(err);
  }
};
