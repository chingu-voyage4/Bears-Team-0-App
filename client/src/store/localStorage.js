// slightly modified
// from Dan Abramov's video on persisting state to local storage
// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
export const loadState = (stateSlice) => {
  try {
    const serializedState = localStorage.getItem(stateSlice);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// save a piece of data into localStorage
// with the given key storeSlice
export const saveState = (storeSlice, data) => {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(storeSlice, serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const remove = (key) => {
  localStorage.removeItem(key);
};
