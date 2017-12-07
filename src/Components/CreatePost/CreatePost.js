import React, { Component } from 'react';
import '../../CSS/CreatePost.css';
import timestamp from 'time-stamp';
import uuidv4 from 'uuid/v4'


export default class CreatePost extends Component {
   constructor(props){
    super(props)
      this.state = {
          title: '',
          message:'',
          user: ''
      }

       this.initialState = {
          title: '',
          message:'',
          user: ''
      };

      this.handleChangeTitle = this.handleChangeTitle.bind(this);
      this.handleChangeMessage = this.handleChangeMessage.bind(this);
      this.handleChangeUser = this.handleChangeUser.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    
    }

  handleChangeTitle(e) {
       this.setState({title: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault()
    let title = this.state.title
    let message = this.state.message 
    let user = this.state.user 

    if(user === '' || message === ''  || title === ''){
      return false
    }

   let ShadowUserObject =  {
      user,
      message,
      title,
      id: uuidv4(),
      timeStamp: timestamp('YYYY/MM/DD -- HH:mm:ss')
    }
    
    this.props.createNewPostForUser(ShadowUserObject)
    this.setState(this.initialState);

  }

  handleChangeMessage(e){
      this.setState({message: e.target.value});
  }

  handleChangeUser(e){
    this.setState({user: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="CreatePost"> 
        <div className="header_create_post"> Create a new post </div>
          <div className="label_create_post"> Post Title</div>
             <input 
                type="text" 
                className="form-control post_title" 
                value={this.state.title} onChange={this.handleChangeTitle} 
                />
            <div className="label_create_post">Message</div>
                 <input 
                      className="form-control message_input"
                      value={this.state.message} onChange={this.handleChangeMessage}  
                      />
            <div className="label_create_post">User</div>
                <input 
                    type="text" 
                    className="form-control user_input" 
                    value={this.state.user} onChange={this.handleChangeUser}
                    />
              <div className="actions_for_create_post">
                <button className="btn-warning cancel"> Cancel</button>
                <button type="submit" className="btn-primary create">Create Post</button>
              </div>          

      </form>
    );
  }
}





