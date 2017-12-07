// dependencies
import assign from 'lodash/assign';
import {CREATE_POST} from '../../Constants/index';

const IntialUserState = {
	Users: [
		{

			message: [
			   {
			   	 id: 1, 
			     content: 'Awesome site to share',
			     userName: 'Yoni',
			     comments: [
			     	{
			     		userName: null,
			     		timeStamp: null,
			     		id: null,
			     		title: null
			     	}

			     ]
			   }
			],
			
		}

	]

}

export default (state = IntialUserState, action) => {
	  const { type, payload } = action;

	  switch (type) {
	  	case CREATE_POST:
	  		console.log(payload)
	  		return state 
	  	default:
	  		// statements_def
	  		return state ;
	  }

}