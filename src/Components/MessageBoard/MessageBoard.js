import React, { Component } from 'react';
import '../../CSS/MessageBoard.css';
import uuidv1 from 'uuid/v1'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

 class MessageBoard extends Component {
    
    render(){
      let messageArray = this.props.Messages;

      let messages = messageArray.map((el, i) => {
      return  (
         <div className="message_container" key={uuidv1()}> 
            <div className="message" > 
              {el.title}
            </div>
            <div className="message_info">
              <div className="poster"> 
                {el.user}
              </div> 
              <div className="Comments">
                2 Comments
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

          </div>
      





        )
    }



 }

 export default withRouter(MessageBoard);



