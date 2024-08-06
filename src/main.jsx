import { Provider } from "react-redux";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "./styles.css";
import { store, persistor } from "./redux/store.js";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);