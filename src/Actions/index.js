export const createNewPostForUser = (payload) => {
  return {
    type: 'CREATE_POST',
    payload
  }
};


export const addCommentsToPost = (payload, user,textArea) => {
	return {
		type: 'ADD_COMMENTS_TO_POST',
		payload: [payload, user,textArea]
	}
}

export const addMessageToReply = (payload) => {
	return {
		type: 'ADD_MESSAGE_ID',
		payload
	}
}


export const LoginUser = (payload) => {
	return {
		type: 'MAKE_USER_LOG_IN',
		payload
	}
}


export const LogOutUser = (payload) => {
	return {
		type: 'MAKE_USER_LOG_OUT',
		payload
	}
}