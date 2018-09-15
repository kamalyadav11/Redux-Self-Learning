import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    {/* Provider is a special React Redux component that magically make the store available to all container components in the application without passing it explicitly. You only need to use it once when you render the root component: */}
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
