import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.scss";
import * as dotenv from 'dotenv';

dotenv.config();
ReactDOM.render(<App />, document.getElementById("root"));
