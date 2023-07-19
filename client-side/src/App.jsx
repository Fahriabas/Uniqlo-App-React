import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { RouterProvider } from "react-router-dom";
import router from "../routes";
// import './App.css'
import { Provider } from "react-redux";
import store from "./stores";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
