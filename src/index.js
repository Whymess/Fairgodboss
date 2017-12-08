// dependencies
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// local dependencies
import {ApplicationContainer,CreatePostContainer, ReplyToPostContainer} from './Containers/index';
import store from './store';



render(
	<Provider store={store}>
      <Router>
        <div>
         <Route exact path="/" component={ApplicationContainer}/>
   	      <Route path="/createPost" component={CreatePostContainer}/>
          <Route path="/replyToPost" component={ReplyToPostContainer}/>
          </div>
       </Router>
  	</Provider>,

  document.getElementById('root')
);
