import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../core/redux/reducers/rootReducer";
import { fetchEventsRequest } from "../../../core/redux/actions/eventsActions";

const Main = () => {
  const dispatch = useDispatch();
  const { pending, events, error } = useSelector(
    (state: RootState) => state.events
  );

  useEffect(() => {
    dispatch(fetchEventsRequest());
  }, []);

  return (
    <div>
      Hello
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        events?.map((event, index) => (
          <div key={event.id}>
            {++index}. {event.title}
          </div>
        ))
      )}
    </div>
  );
};

export default Main;
