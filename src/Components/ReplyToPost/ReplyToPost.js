import React, { Component } from 'react';
import '../../CSS/ReplyToPost.css';
import uuidv1 from 'uuid/v1'

export default class ReplyToPost extends Component {
    constructor(props){
      super(props)
  
      this.state = {
        textarea: '',
        user: ''
      }


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


  handleSubmit(e) {
        e.preventDefault();
      if(this.state.user !== '' && this.state.textarea !== '' ){
        let messages = this.props.Messages;
        messages.map((el, i) => {
          let {user, textarea} = this.state;
          if(el.id === this.props.MessageID){
            let postID = this.props.MessageID
            this.props.addCommentsToPost(postID, user, textarea)
          }
        })


      } 

  
  }
 


  // handleSubmit(e) {
  //  e.preventDefault()
  //  console.log("Hello")



    
  // }


  findCorrectMessageToReplyTo(){
    let messages = this.props.Messages;
    
    let MessageToBeRepliedTo = messages.map((el, i) => {
        if(el.id === this.props.MessageID){
        return (
            <div className="post_to_be_responded_to" key={i}>
             <div className="reply_to_PostTitle"> {el.title }</div> 
              <small id="emailHelp" className="form-text text-muted reply_to_PostInfo">By: {el.user} 11/27/17</small>
            <div className="Reply_to_PostBody"> 
              {el.message}
            </div>
          </div>
            )
        }
    })

    return MessageToBeRepliedTo
  }




  render() {

    let replyMessage = this.findCorrectMessageToReplyTo()

    if(replyMessage.length == 0){
       return replyMessage = 'You have not selected a post to respond to!'
    }


    return (
         <div className="ReplyMain">
            <button className="back_to_posts">Back To Posts </button>
          <div className="post_to_be_responded_to">
                {replyMessage}
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

          <form onSubmit={this.handleSubmit}>
          <div className="reply_to_post"> 
              <div className="form-group">
                <label>Reply Message</label>
                <textarea onChange={this.textareaOnChange} 
                className="form-control"  rows="3"></textarea>
            </div>

            <div>
                <div className="form-group"></div>
                <label>Reply User</label>
                <input type="text" onChange={this.userOnChange} className="form-control"/>
                 <button type="submit" className="reply_to_post_button"> Post Reply </button>
            </div>
          </div>
          </form>
      </div>
    );
  }
}

