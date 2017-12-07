// dependencies
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';

// local dependencies
import ApplicationContainer from './Containers/ApplicationContainer/ApplicationContainer';
import store from './store'

render(
	<Provider store={store}>
   		 <ApplicationContainer />
  	</Provider>,

  document.getElementById('root')
);
