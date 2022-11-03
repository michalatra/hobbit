import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./modules/auth/login/Login";
import SignIn from "./modules/auth/signin/SignIn";
import Welcome from "./modules/welcome/Welcome";
import Auth from "./modules/auth/Auth";
import Registration from "./modules/registration/Registration";
import Schedule from "./modules/schedule/Schedule";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Welcome />
            },
            {
                path: "auth",
                element: <Auth />,
                children: [
                    {
                        path: "login",
                        element: <Login />
                    },
                    {
                        path: "signin",
                        element: <SignIn />
                    }
                ]
            },
            {
                path: "registration",
                element: <Registration />
            },
            {
                path: "schedule",
                element: <Schedule />
            }

        ]
    }
])
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
