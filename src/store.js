import { createStore } from "redux";

const initialState = {
  photoId: 0,
  description: "",
  comments: []
};

export const UPDATE_PHOTO_ID = "UPDATE_PHOTO_ID";
export const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION";
export const UPDATE_COMMENTS = "UPDATE_COMMENTS";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PHOTO_ID:
      return {
        ...state,
        photoId: payload
      };
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        description: payload
      };
    case UPDATE_COMMENTS:
      return {
        ...state,
        comments: payload
      };
    default:
      return state;
  }
}

export default createStore(reducer);
