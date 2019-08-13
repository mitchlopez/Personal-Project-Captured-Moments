import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import axios from "axios";

const initialState = {
  photoId: 0,
  description: "",
  comments: []
};

export const UPDATE_PHOTO_ID = "UPDATE_PHOTO_ID";
export const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION";
export const UPDATE_COMMENTS = "UPDATE_COMMENTS";

export const updateDescription = id => {
  let data = axios.get(`/photo/${id}`).then(res => res.data[0].description);
  return {
    type: UPDATE_DESCRIPTION,
    payload: data
  };
};

export const updateComments = id => {
  let data = axios.get(`/photo/${id}`).then(res => {
    let photoComments = [];
    for (let i = 0; i < res.length; i++) {
      photoComments.push(data[i].comment);
    }
    return photoComments;
  });
};

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

export default createStore(reducer, applyMiddleware(promiseMiddleware));
