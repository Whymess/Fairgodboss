import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../../Firebase';

// Local Dependencies 
import {NoPosts} from '../../Components/index';
import {MessageBoardContainer} from '../../Containers/index';


import '../../CSS/App.css';

export default class Application extends Component {
  constructor(props){
    super(props)

    this.state = {
      user:''
    }

    this.logout = this.logout.bind(this)

  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
    if (user) {
      let {displayName} = user
      this.setState({
        user: displayName
      })

      this.props.LoginUser(user)
    } 
  });

  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }
 

  render() {
  let  {user}   = this.state
  let {Messages} = this.props

  if(Messages.length === 0){
  		return (
        <div>
           {user ?  
                <div>
                Hello, {user}
               <div> <button onClick={this.logout}> Logout </button> </div>
                </div>

            :

              <button  className="loginBtn loginBtn--google" onClick={() => auth.signInWithPopup(googleAuthProvider)}> Sign in </button>
           }
        	<NoPosts/>

        </div>
  		)
  	}
    return (
      	<MessageBoardContainer/>
    );
  }
}

