import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Contact from './Components/Contact.jsx'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import About from './Components/About'

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>
//   },
//   {
//     path:"/About",
//     element:<About/>
//   },
//   {
//     path:"/Contact",
//     element:<Contact/>
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App/>
  </StrictMode>,
)
