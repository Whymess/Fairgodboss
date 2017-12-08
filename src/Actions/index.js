export const createNewPostForUser = (payload) => {
  return {
    type: 'CREATE_POST',
    payload
  }
};


export const addCommentsToPost = (payload) => {
	return {
		type: 'ADD_COMMENTS_TO_POST',
		payload
	}
}