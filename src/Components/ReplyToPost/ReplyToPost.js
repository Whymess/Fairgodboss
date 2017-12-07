import React, { Component } from 'react';
import '../../CSS/ReplyToPost.css';

export default class CreatePost extends Component {
  render() {
    return (
      <div className="ReplyMain">
            <button className="back_to_posts">Back To Posts </button>
          <div className="post_to_be_responded_to">
             <div className="reply_to_PostTitle"> Coding is art</div> 
              <small id="emailHelp" className="form-text text-muted reply_to_PostInfo">By: Yoni Messing 11/27/17</small>

            <div className="Reply_to_PostBody"> 
              orem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio lorem, pellentesque sit amet justo eget, consectetur rutrum leo. Nulla eu felis eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum accumsan nunc lorem
            </div>

          </div>

          <div className="responses_to_post"> 
              <span className="Responses_title"> Responses </span>

              <div className="reponse_body">
                  <div className="response_body_user"> Yoni  </div>

                  <div> Pellentesque varius elit a justo consectetur, non blandit risus ultrices. Donec laoreet mollis tortor vel fermentum. Sed commodo lorem id nisl r</div>

              </div>
               <div className="reponse_body">
                  <div className="response_body_user"> Yoni  </div>

                  <div> Pellentesque varius elit a justo consectetur, non blandit risus ultrices. Donec laoreet mollis tortor vel fermentum. Sed commodo lorem id nisl r</div>

              </div>
          </div>


          <div className="reply_to_post"> 
              <div className="form-group">
                <label>Reply Message</label>
                <textarea className="form-control"  rows="3"></textarea>
            </div>

            <div>
                <div className="form-group"></div>
                <label>Reply User</label>
                <input type="email" className="form-control"/>
                 <button className="reply_to_post_button"> Post Reply </button>
             
            </div>

          </div>
      </div>
    );
  }
}

