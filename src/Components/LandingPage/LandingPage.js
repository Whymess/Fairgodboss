import React, { Component } from 'react';
import '../../CSS/LandingPage.css';

import {MessageBoard, CreatePost, NoPosts, ReplyToPost} from '../../Containers/index';
import {CreatePostContainer} from '../../Containers/';

export default class LandingPage extends Component {
  render() {
    return (
      <CreatePostContainer/>
    );
  }
}

