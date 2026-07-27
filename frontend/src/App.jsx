import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Login from './Component/Auth/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        index: "#",
        element: <Home />
      }
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