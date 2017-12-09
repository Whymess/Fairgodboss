// dependencies
import assign from 'lodash/assign';
import _ from 'lodash';

import {CREATE_POST, ADD_COMMENTS_TO_POST,ADD_MESSAGE_ID} from '../../Constants/index';
import uuidv1 from 'uuid/v1'
import timestamp from 'time-stamp';

const IntialMessageState = {
	messages: [

		
	],

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
	  		let arrayOfMessages = state.messages;

	  		let postToBeCommentedOn = _.find(arrayOfMessages, (o) => { 
	  			return o.id === payload;
	  		 });

	  		 try {
			    if(postToBeCommentedOn) {
			        




			      }
			 } catch(e){
			      alert('Talk to the code monkey', e)
			 }
	  		
	  		

	  		

	  	



	  		return state

	  	case ADD_MESSAGE_ID:
	  		return assign({}, state, {
        		messageToBeRepliedToID: payload
     		 });

	  	default:
	  		// statements_def
	  		return state ;
	  }

}