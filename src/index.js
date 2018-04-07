import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import './stylesheets/main.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// saveState allows caching to localStorage
import { saveState, remove } from './store/localStorage';

store.subscribe(() => {
  const makeQuizzes = store.getState().makeQuizzes;
  const titleAndDescription = store.getState().titleAndDescription;
  // cache data from MakeQuiz page
  if (
    makeQuizzes &&
    makeQuizzes.questions &&
    makeQuizzes.questions.length > 0
  ) {
    saveState('makeQuizzes', makeQuizzes);
  } else {
    //    remove('makeQuizzes');
    remove('makeQuizzes');
  }

  // cache data from Dashboard page
  if (titleAndDescription.title && titleAndDescription.description) {
    saveState('titleAndDescription', titleAndDescription);
  } else {
    remove('titleAndDescription');
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
