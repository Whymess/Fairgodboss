import React, { Component } from 'react';
import '../../CSS/ReplyToPost.css';
import { Link } from 'react-router-dom';
import timestamp from 'time-stamp';
import _ from 'lodash';

export default class ReplyToPost extends Component {
    constructor(props){
      super(props)
  
      this.state = {
        textarea: '',
        user: '',
        render: false
      }

       this.initialState = {
          textarea: '',
          user:''
      };


      this.userOnChange = this.userOnChange.bind(this);
      this.textareaOnChange = this.textareaOnChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    textareaOnChange(e){
      this.setState({
          textarea: e.target.value
      })
    }

    userOnChange(e){
      this.setState({
        user: e.target.value
      })
    }




    findCorrectCommentsAndRender(){
       let messageArrayHandler = this.props.Messages
       let handlerOnObjectWeNeed = _.find(messageArrayHandler,(object) => { 
          let messageWeAreLookingFor = this.props.MessageID
          if(object.id === messageWeAreLookingFor){
            return object 
          } 

          return false 
      });

       if(handlerOnObjectWeNeed){
             let returnCommentsFromMessage = handlerOnObjectWeNeed.comments.map((el, i) => {

              return (
                    <div className="reponse_body" key={i}>
                        <div className="response_body_user"> By: {el.user}  </div>

                        <div> Reply: {el.replyInput}</div>

                    </div>

                )
               

            })

            return returnCommentsFromMessage

       }

       
  }


  handleSubmit(e) {
      e.preventDefault();
      if(this.state.user !== '' && this.state.textarea !== '' ){
        let messages = this.props.Messages;
        messages.map((el, i) => {
          let {user, textarea} = this.state;
          if(el.id === this.props.MessageID){
            let postID = this.props.MessageID

            this.props.addCommentsToPost(postID, user, textarea)
            return true
          }

          return false
        })


      } 

     this.setState(this.initialState);
  }

  findCorrectMessageToReplyTo(){
    let messages = this.props.Messages;
    let messageToBeRepliedTo = messages.map((el, i) => {
        if(el.id === this.props.MessageID){
        return (
            <div className="post_to_be_responded_to" key={i}>
             <div className="reply_to_PostTitle"> {el.title }</div> 
              <small id="emailHelp" className="form-text text-muted reply_to_PostInfo">By: {el.user}  {timestamp('YYYY/MM/DD -- HH:mm:ss')}</small>
            <div className="Reply_to_PostBody"> 
              Message: {el.message}
            </div>
          </div>
            )
        }

        return false 
    })
    
   
     
      return messageToBeRepliedTo
 
  
  }


  render() {
   
    
    let originalMessage = this.findCorrectMessageToReplyTo()
     let comments    =  this.findCorrectCommentsAndRender()


    return (
         <div className="ReplyMain">

           <Link to="/">
              <button className="back_to_posts">Back To Posts </button>
            </Link>
           
          <div className="post_to_be_responded_to">
                  {originalMessage}
          </div>

          <div className="responses_to_post"> 
              <span className="Responses_title"> Responses: </span>
                  {comments}
                
          </div>

          <form onSubmit={this.handleSubmit}>
          <div className="reply_to_post"> 
              <div className="form-group">
                <label>Reply Message</label>
                <input 
                   value={this.state.textarea}
                  onChange={this.textareaOnChange} 
                className="form-control"/>
            </div>

            <div>
                <div className="form-group"></div>
                <label>Reply User</label>
                <input type="text" 
                      value={this.state.user}
                      onChange={this.userOnChange} className="form-control"/>
                 <button type="submit" className="reply_to_post_button"> Post Reply </button>
            </div>
          </div>
          </form>
      </div>
    );
  }
}

