import React, { Component } from 'react';
import '../../CSS/LandingPage.css';

import {MessageBoard, CreatePost, NoPosts, ReplyToPost} from '../../Components/index';

export default class LandingPage extends Component {
  render() {
    return (
      <CreatePost/>
    );
  }
}

