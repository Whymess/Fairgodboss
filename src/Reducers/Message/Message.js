// dependencies
import assign from 'lodash/assign';
import {CREATE_POST, ADD_COMMENTS_TO_POST} from '../../Constants/index';
import uuidv1 from 'uuid/v1'
import timestamp from 'time-stamp';

const IntialMessageState = {
	messages: [
		
	]
}
export default (state = IntialMessageState, action) => {
	  const { type, payload } = action;

	  switch (type) {
	  	case CREATE_POST:
	  		return assign({}, state, {
        		messages: state.messages.concat(payload)
     		 });
	  	case ADD_COMMENTS_TO_POST:
	  		
	  		console.log(payload)
	  		return state



	  	default:
	  		// statements_def
	  		return state ;
	  }

}