import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Layout/Home';
import Statistics from './Components/Statistics/Statistics';

import JobDetail from './Components/JobDetail/JobDetail';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';

import jobsLoaders from './Components/Loaders/jobsLoaders';
import CoverPage from './Components/CoverPage/CoverPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <CoverPage></CoverPage>,
        loader: jobsLoaders
        
      },
      {
        path: '/:jobId',
        element: <JobDetail></JobDetail>,
        loader: jobsLoaders
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
