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