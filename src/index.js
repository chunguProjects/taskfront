import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./Home";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(

 <BrowserRouter>
  
    <App />
    <Home />
 </BrowserRouter>,

 document.getElementById("root")
);
serviceWorker.unregister();

