import React, { Component } from 'react';
import '../../CSS/landingPage.css';

import {MessageBoard} from '../../Components/index';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
      		<div className="title"> The Fairgodboss Message Board </div>
      		{/*<div className="title"> The Fairgodboss Message Board </div>


      		<div className="main_content"> There are current no posts.... add one! </div> */}

      		<MessageBoard/>

      </div>
    );
  }
}

export default LandingPage;
