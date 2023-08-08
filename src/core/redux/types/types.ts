import { eventTypes } from "./../actionTypes/eventsTypes";
import { IEvent } from "./../models/IEvent";

export interface EventsState {
  pending: boolean;
  events: IEvent[];
  error: string | null;
}

export interface FetchEventsSuccessPayload {
  events: IEvent[];
}

export interface FetchEventsFailurePayload {
  error: string;
}

export interface FetchEventsRequest {
  type: typeof eventTypes.FETCH_EVENTS_REQUEST;
}

export type FetchEventsSuccess = {
  type: typeof eventTypes.FETCH_EVENTS_SUCCESS;
  payload: FetchEventsSuccessPayload;
};

export type FetchEventsFailure = {
  type: typeof eventTypes.FETCH_EVENTS_FAILURE;
  payload: FetchEventsFailurePayload;
};

export type EventsActions =
  | FetchEventsRequest
  | FetchEventsSuccess
  | FetchEventsFailure;
