import React, { Component } from 'react';
import '../../CSS/MessageBoard.css';


export default () => {

  return (
       <div className="MessageBoard">
          <div className="message_container"> 
               
          <div className="message"> 
              Believe you can and you are halfway there.
          </div>

          <div className="message_info">
              <div className="poster"> 
                Theodore Roosevelt
              </div> 

              <div className="Comments">
                2 Comments 
              </div>

              <div className="timestamp">
                  timeStamp
              </div>
          </div>
        </div>
        <div className="message_container"> 
               
          <div className="message"> “If you are insecure, guess what? The rest of the world is, too. Do not overestimate the competition and underestimate yourself. You are better than you think.
          </div>

          <div className="message_info">
              <div className="poster"> 
                Yoni Messing
              </div> 

              <div className="Comments">
                2 Comments 
              </div>

              <div className="timestamp">
                  timeStamp
              </div>
          </div>
        </div>
        <div className="message_container"> 
               
          <div className="message"> “Only one person on the React team has a CS degree. Doesn’t mean they’re not useful, but the perception that you need to have it to get hired is false”. 
          </div>

          <div className="message_info">
              <div className="poster"> 
                 Dan Abramov
              </div> 

              <div className="Comments">
                2 Comments 
              </div>

              <div className="timestamp">
                  timeStamp
              </div>
          </div>
        </div>
      </div>

    )
}


