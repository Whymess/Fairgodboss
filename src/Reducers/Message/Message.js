// dependencies
import assign from 'lodash/assign';
import _ from 'lodash';

import {CREATE_POST, ADD_COMMENTS_TO_POST,ADD_MESSAGE_ID} from '../../Constants/index';
import uuidv1 from 'uuid/v1'

const IntialMessageState = {
	 messages: [],

	 messageToBeRepliedToID: '' 
}
export default (state = IntialMessageState, action) => {
	  const { type, payload } = action;

	  switch (type) {
	  	case CREATE_POST:
	  		
	  		return assign({}, state, {
        		messages: state.messages.concat(payload)
     		 });
	  
	  	case ADD_COMMENTS_TO_POST:

	  		let arrayOfMessages = state.messages.slice();

	  		let postToBeCommentedOn = _.find(arrayOfMessages, (o) => { 
	  			let idOfMessageSelected = payload[0]
	  			return o.id === idOfMessageSelected;
	  		 });

	  		let uniqueIDofComment = postToBeCommentedOn.id

	 		// Find the index of the comment 
	  		const index = arrayOfMessages.findIndex(item => item.id === uniqueIDofComment)

	  		 try {
			    if(postToBeCommentedOn) {
			        	let user = payload[1];
	  					let replyInput = payload[2]
	  					let replyMessageToBeAppended = {
	  						user,
	  						replyInput,
	  						id: uuidv1()
	  					}

	  				postToBeCommentedOn.comments.push(replyMessageToBeAppended)

					arrayOfMessages[index] = postToBeCommentedOn
	  				
  					return assign({}, state, {
    					messages: arrayOfMessages
 					});
	  				
			      }
			 } catch(e){
			      alert('Talk to the code monkey', e)
			      return state

			 }
		break;

	  	case ADD_MESSAGE_ID:
	  		console.log("ADD_MESSAGE_ID", payload)
	  		return assign({}, state, {
        		messageToBeRepliedToID: payload
     		 });

	  	default:
	  		// statements_def
	  		return state ;
	  }

}