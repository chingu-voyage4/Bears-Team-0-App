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
import { saveState } from './store/localStorage';

// cache data from MakeQuiz page
store.subscribe(() => saveState('makeQuizzes', store.getState().makeQuizzes));

// cache data from Dashboard page
store.subscribe(() => saveState('titleAndDescription', store.getState().titleAndDescription));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
