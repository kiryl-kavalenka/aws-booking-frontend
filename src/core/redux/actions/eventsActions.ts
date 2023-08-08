import { eventTypes } from "./../actionTypes/eventsTypes";
import {
  FetchEventsFailure,
  FetchEventsFailurePayload,
  FetchEventsRequest,
  FetchEventsSuccess,
  FetchEventsSuccessPayload,
} from "../types/types";

export const fetchEventsRequest = (): FetchEventsRequest => ({
  type: eventTypes.FETCH_EVENTS_REQUEST,
});

export const fetchEventsSuccess = (
  payload: FetchEventsSuccessPayload
): FetchEventsSuccess => ({
  type: eventTypes.FETCH_EVENTS_SUCCESS,
  payload,
});

export const fetchEventsFailure = (
  payload: FetchEventsFailurePayload
): FetchEventsFailure => ({
  type: eventTypes.FETCH_EVENTS_FAILURE,
  payload,
});
