export const createNewPostForUser = (payload) => {
  return {
    type: 'CREATE_POST',
    payload
  }
};