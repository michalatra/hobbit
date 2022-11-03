import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/base.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./modules/auth/login/Login";
import SignIn from "./modules/auth/signin/SignIn";
import Welcome from "./modules/welcome/Welcome";
import Auth from "./modules/auth/Auth";
import Registration from "./modules/registration/Registration";
import Schedule from "./modules/schedule/Schedule";
import {ApplicationPathEnum} from "./models/ui/enum/ApplicationPathEnum";

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
                path: ApplicationPathEnum.AUTH,
                element: <Auth />,
                children: [
                    {
                        path: ApplicationPathEnum.LOGIN,
                        element: <Login />
                    },
                    {
                        path: ApplicationPathEnum.SiGNIN,
                        element: <SignIn />
                    }
                ]
            },
            {
                path: ApplicationPathEnum.REGISTRATION,
                element: <Registration />
            },
            {
                path: ApplicationPathEnum.SCHEDULE,
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
