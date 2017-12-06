import React, { Component } from 'react';
import '../../CSS/LandingPage.css';

import {MessageBoard, CreatePost, NoPosts} from '../../Components/index';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
      		<div className="title"> The Fairgodboss Message Board </div>
		  	
		  <MessageBoard/>
			
			<button type="button" className="create_new_post">Create New Post</button>
      </div>
    );
  }
}

