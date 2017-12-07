// dependencies
import assign from 'lodash/assign';

const IntialUserState = {
	Users: [
		{
			id: "Whyess",
			posts: [
			   {
			   	 id: 1, 
			     content: 'Awesome site to share',
			     userName: 'Yoni'
			   }
			],
			comments: [
				{
				  id: 1,
				  content: '',
				  userName: 'Jill',
				  userName: 'great post'
				}

			]

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