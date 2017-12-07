// dependencies
import assign from 'lodash/assign';
import {CREATE_POST} from '../../Constants/index';

const IntialMessageState = {
	messages: [
		// {
		// 	id: '',
		// 	timeStamp: '',
		// 	UserName: '',
		// 	title: '',
		// 	Content: '',			
		// }

	]
}
export default (state = IntialMessageState, action) => {
	  const { type, payload } = action;

	  switch (type) {
	  	case CREATE_POST:
	  		return assign({}, state, {
        		messages: state.messages.concat(payload)
     		 });
	  	default:
	  		// statements_def
	  		return state ;
	  }

}