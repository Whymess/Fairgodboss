// dependencies
import assign from 'lodash/assign';
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