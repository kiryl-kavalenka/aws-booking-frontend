import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchEventsFailure,
  fetchEventsSuccess,
} from "../actions/eventsActions";
import { eventTypes } from "./../actionTypes/eventsTypes";
import { fetchAllEvents } from "../services/eventsServices";

function* fetchEventsSaga(): any {
  try {
    const response = yield call(fetchAllEvents);
    yield put(
      fetchEventsSuccess({
        events: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchEventsFailure({
        error: e.message,
      })
    );
  }
}

function* eventsSaga() {
  yield all([takeLatest(eventTypes.FETCH_EVENTS_REQUEST, fetchEventsSaga)]);
}

export { eventsSaga };
