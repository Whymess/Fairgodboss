import React, { Component } from 'react';
import '../../CSS/CreatePost.css';

export default class CreatePost extends Component {
  render() {
    return (
      <form>
        <div className="CreatePost">
  			<div className="header_create_post"> Create a new post </div>
  			  <div className="form-group">
              	 <div className="label_create_post"> Post Title</div>
             		 <input type="text" className="form-control post_title" />
                </div>
  			 <div className="form-group">
                <div className="label_create_post">Message</div>
                 <textarea className="form-control message_input" rows="3"></textarea>
              </div>
              <div className="form-group">
                <div className="label_create_post">User</div>
                <input type="text" className="form-control user_input" />
              </div>
              
              <div className="actions_for_create_post">
                <button type="submit" className="btn-warning cancel"> Cancel</button>
                <button type="submit" className="btn-primary create">Create Post</button>
              </div>
        </div>
    </form>
    );
  }
}

