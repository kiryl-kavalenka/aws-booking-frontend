import { eventTypes } from "./../actionTypes/eventsTypes";
import { EventsActions, EventsState } from "../types/types";

const initialState: EventsState = {
  pending: false,
  events: [],
  error: null,
};

const eventReducer = (state = initialState, action: EventsActions) => {
  switch (action.type) {
    case eventTypes.FETCH_EVENTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case eventTypes.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        events: action.payload.events,
        error: null,
      };
    case eventTypes.FETCH_EVENTS_FAILURE:
      return {
        ...state,
        pending: false,
        events: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default eventReducer;
