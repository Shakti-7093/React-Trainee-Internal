export const SET_POSTS = 'SET_POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const updatePost = (id, data) => ({
  type: UPDATE_POST,
  payload: { id, data },
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});