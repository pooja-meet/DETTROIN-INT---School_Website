import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Login from './Component/Auth/Login'
import Infrastructure from './Component/Infrastructure/Infrastructure'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import BeyondAcademic from './Component/BeyondAcademic/BeyondAcademic'
import Overview from './Component/About/Overview'
import CBSEPolicy from './Component/About/CBSEPolicy'
import SchoolCommittee from './Component/About/SchoolCommittee'
import Blog from './Component/About/Blog'
import Faculty from './Component/Academics/Faculty'
import Assessment from './Component/Academics/Assessment'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <>
          <Home />
          <Footer />
        </>
      },
      {
        path: "overview",
        element: (
          <>
            <Overview />
            <Footer />
          </>
        )
      },
      {
        path: "cbse-policy",
        element: (
          <>
            <CBSEPolicy />
            <Footer />
          </>
        )
      },
      {
        path: "school-committee",
        element: (
          <>
            <SchoolCommittee />
            <Footer />
          </>
        )
      },
      {
        path: "blog",
        element: (
          <>
            <Blog />
            <Footer />
          </>
        )
      },

      {
        path: 'faculty',
        element: <>
          <Faculty />
          <Footer />
        </>
      }, {
        path: "assessment-evaluation-policy",
        element: <>
          <Assessment />
          <Footer /></>
      }, {
        path: 'beyond-academic/',
        element: <>
          <BeyondAcademic />
          <Footer />
        </>
      },
      {
        path: "infrastructure",
        element: <>
          <Infrastructure />
          <Footer />
        </>
      },

    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App;