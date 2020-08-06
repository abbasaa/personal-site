import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import HttpsRedirect from 'react-https-redirect';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <HttpsRedirect>
            <App />
        </HttpsRedirect>
    </React.StrictMode>,
    document.getElementById("root")
);