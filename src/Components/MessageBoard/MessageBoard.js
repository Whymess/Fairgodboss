import React, { Component } from 'react';
import '../../CSS/MessageBoard.css';
import uuidv1 from 'uuid/v1'
// uuidv1()

export default (props) => {
  let messageArray = props.Messages;

  let messages = messageArray.map((el, i) => {
    console.log(el)
    return  (
       <div className="message_container" key={uuidv1()}> 
          <div className="message" > 
            {el.Content}
          </div>
          <div className="message_info">
            <div className="poster"> 
              {el.UserName}
            </div> 
            <div className="Comments">
              {el.comments.length} Comments
            </div>
            <div className="timestamp">
              {el.timeStamp}
            </div>
          </div>
        </div>
      )
  })



  return (
     <div className="MessageBoard">
          {messages}
      </div>
      

    )
}


