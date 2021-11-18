import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getPosts = createActions({
  getPostRequest: undefined,
  getPostSuccess: (payload) => payload,
  getPostFailure: (err) => err,
});
