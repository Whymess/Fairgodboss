// dependencies
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';

// local dependencies
import App from './Components/Application/App';
import store from './store'

render(
	<Provider store={store}>
   		 <App />
  	</Provider>,

  document.getElementById('root')
);
