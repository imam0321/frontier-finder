import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Layout/Home';
import Statistics from './Components/Statistics/Statistics';
import CoverPage from './Components/CoverPage/CoverPage';
import JobCategory from './Components/JobCategory/JobCategory';
import FirstPage from './Components/Layout/FirstPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <FirstPage></FirstPage>,
        loader: () => fetch('jobCategories.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
