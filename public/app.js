import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/style.scss";

const el = document.getElementById("root");
if (el) {
  const root = ReactDOM.createRoot(el);
  root.render(<Router />);
} else {
  console.error("Couldn't find the root element");
}
