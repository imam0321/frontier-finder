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
import FirstPage, { JobsContext } from './Components/Layout/FirstPage';
import Data from '../public/jobs.json';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <FirstPage></FirstPage>,
      },
      {
        path: '/:id',
        element: <JobDetail></JobDetail>,
        
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
    <JobsContext.Provider value={[Data]}>   
      <RouterProvider router={router} />
    </JobsContext.Provider>
  </React.StrictMode>,
)
