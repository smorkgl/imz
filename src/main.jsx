import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import News from './pages/News.jsx'
import Job from './pages/Job.jsx'
import JobVacancy from './pages/JobVacancy.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './pages/Error-page.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "news",
    element: <News />,
  },
  {
    path: "job",
    element: <Job />,
  },
  {
    path: "/job/:id",
    element: <JobVacancy />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
