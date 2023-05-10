import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/404'
import HomePage from './pages'
import PortfolioPage from './pages/portfolio'
import ContactPage from './pages/contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
