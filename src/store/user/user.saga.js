<<<<<<< HEAD
import { takeLatest, put, all, call } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.types";

import { signInSuccess, signInFailed } from "./user.action";

=======
import { takeLatest, all, call, put, take } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailed } from "./user.action";
>>>>>>> 09dced6427ddf253568b654f14cfb59c1a0869eb
import {
  getCurrentUser,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

<<<<<<< HEAD
export function* getSnapshopFromUserAuth(userAuth, additionalDetails) {
=======
export function* getSnapshotFromUserAuth(userAuth, additionalInformation) {
>>>>>>> 09dced6427ddf253568b654f14cfb59c1a0869eb
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
<<<<<<< HEAD
      additionalDetails
    );
    console.log(userSnapshot);
    console.log(userSnapshot.data());
=======
      additionalInformation
    );
>>>>>>> 09dced6427ddf253568b654f14cfb59c1a0869eb
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
<<<<<<< HEAD
    yield call(getSnapshopFromUserAuth, userAuth);
=======
    yield call(getSnapshotFromUserAuth, userAuth);
>>>>>>> 09dced6427ddf253568b654f14cfb59c1a0869eb
  } catch (error) {
    yield put(signInFailed(error));
  }
}
<<<<<<< HEAD

=======
>>>>>>> 09dced6427ddf253568b654f14cfb59c1a0869eb
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

<<<<<<< HEAD
export function* userSagas() {
=======
export function* userSaga() {
>>>>>>> 09dced6427ddf253568b654f14cfb59c1a0869eb
  yield all([call(onCheckUserSession)]);
}
