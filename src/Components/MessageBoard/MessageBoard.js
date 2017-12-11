import React, { Component } from 'react';
import '../../CSS/MessageBoard.css';
import uuidv1 from 'uuid/v1';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, googleAuthProvider } from '../../Firebase';


 class MessageBoard extends Component {
      constructor(props){
     super(props)
      


      this.addCommentsToPost = this.addCommentsToPost.bind(this);
      this.logout = this.logout.bind(this);
    }

    addCommentsToPost(id){
         this.props.addMessageToReply(id)
        this.props.history.push('/replyToPost')

    }

  logout() {
    auth.signOut()
      .then(() => this.props.LogOutUser());
  }

    
    render(){
      let messageArray = this.props.Messages;

      let {currentUser} = this.props
      let messages = messageArray.map((el, i) => {

      return  (
         <div className="message_container" key={uuidv1()}> 
            <div className="message" > 
                  {el.title}
            </div>
            <div className="message_info">
              <div className="poster"> 
                By: {el.user}
              </div> 
              <div className="Comments">
                <button onClick={() => this.addCommentsToPost(el.id)} className="comments_button"> {el.comments.length} Comments </button>
              </div>
              <div className="timestamp">
                {el.timeStamp}
              </div>
            </div>
          </div>
        )
    })

      return(

        <div className="MessageBoard">
          {messages}


           <Link to="/createPost">
             <button className="create_post">
                Create new Post
            </button>
            </Link>
           {
            currentUser ?

              <button onClick={this.logout}> Sign Out </button>

              :

              <button  className="loginBtn loginBtn--google" onClick={() => auth.signInWithPopup(googleAuthProvider)}> Sign in </button>

           }
            
          </div>
      
        )
    }



 }

 export default withRouter(MessageBoard);



