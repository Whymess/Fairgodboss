import React, { Component } from 'react';
import '../../CSS/CreatePost.css';

export default class CreatePost extends Component {
  render() {
    return (
      <div className="CreatePost">
              <div className="header_create_post"> Create a new post </div>
      	 <form>
            <div className="form-group">
              <label>Post Title</label>
              <input type="text" className="form-control post_title" />
            </div>
            <div className="form-group">
              <label>Message</label>
               <textarea className="form-control message_input" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label>User</label>
              <input type="text" className="form-control user_input" />
            </div>
            
            <div className="actions_for_create_post">
              <button type="submit" className="btn btn-warning"> Cancel</button>
              <button type="submit" className="btn btn-primary">Create Post</button>
            </div>

          </form>
      </div>
    );
  }
}

