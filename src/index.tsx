import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import configureStore from "./core/redux/configureStore";

const store = configureStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
