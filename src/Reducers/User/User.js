// dependencies
import assign from 'lodash/assign';

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

	  switch ("d") {
	  	case "label_1":
	  		// statements_1
	  		return state 
	  	default:
	  		// statements_def
	  		return state ;
	  }

}