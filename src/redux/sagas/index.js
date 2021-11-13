import { takeLatest, call } from "redux-saga/effects";
import * as api from "../../api";
import * as actions from "../actions";

// ES6 Generator function
function* fetchPostSaga(action) {
  const post = yield call(api.fetchPosts);
  console.log("[posts]", post);
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostRequest, fetchPostSaga);
}

export default mySaga;
