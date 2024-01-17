import { SET_POSTS, ADD_POST, UPDATE_POST, DELETE_POST } from './action';

const initialState = {
  posts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case UPDATE_POST:
      const { id, data } = action.payload;
      return {
        ...state,
        posts: state.posts.map((post) => (post.id === id ? { ...post, ...data } : post)),
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };

    default:
      return state;
  }
};

export default rootReducer;