import React, { Component } from 'react';
import '../../CSS/landingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
      		<div className="title"> The Fairgodboss Message Board </div>


      		<div className="main_content"> There are current no posts.... add one! </div> 

      		<button className="newPost"> Create New Post </button>
      </div>
    );
  }
}

export default LandingPage;
