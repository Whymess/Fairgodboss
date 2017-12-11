// dependencies
import assign from 'lodash/assign';
import _ from 'lodash';

import {CREATE_POST, ADD_COMMENTS_TO_POST,ADD_MESSAGE_ID, MAKE_USER_LOG_IN, MAKE_USER_LOG_OUT} from '../../Constants/index';
import uuidv1 from 'uuid/v1'

const IntialMessageState = {
	 messages: [],

	 messageToBeRepliedToID: '',

	 currentUser: ''
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
	  		return assign({}, state, {
        		messageToBeRepliedToID: payload
     		 });

	  	case MAKE_USER_LOG_IN:
	  		let {displayName} = payload
	  		return assign({}, state, {
        		currentUser: displayName
     		 });


	  	case MAKE_USER_LOG_OUT:
	  		return assign({}, state, {
        		currentUser: ''
     		 });

	  	default:
	  		return state ;
	  }

}