import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Login from './Component/Auth/Login'
import Infrastructure from './Component/Infrastructure/Infrastructure'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import About from './Component/About/About'
import BeyondAcademic from './Component/BeyondAcademic/BeyondAcademic'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        index: "true",
        element: <>
          <Home />
          <Footer />
        </>
      },
      {
        path: 'about',
        element:
          <>
            <About />
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