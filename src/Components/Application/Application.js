import React, { Component } from 'react';


// Local Dependencies 
import {NoPosts} from '../../Components/index';
import {MessageBoardContainer} from '../../Containers/index';

import '../../CSS/App.css';

export default class Application extends Component {
  render() {

  let {Messages} = this.props
  if(Messages.length === 0){
  		return (
  			<NoPosts/>
  		)
  	}
    return (
      	<MessageBoardContainer/>
    );
  }
}

