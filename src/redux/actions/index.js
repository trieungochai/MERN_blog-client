import { createActions } from "redux-actions";

export const getPosts = createActions({
  getPostRequest: undefined,
  getPostSuccess: (payload) => payload,
  getPostFailure: (err) => err,
});
