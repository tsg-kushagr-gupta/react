import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Param from './components/Param';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import Courses from './components/Courses';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
        <Navbar/>
        <Home/>
      </div>
    },

    {
      path:"/about",
      element: <div>
        <Navbar/>
        <About/>
      </div>,
      children: [
        {
          path:'courses',
          element: <Courses/>
        },
        {
          path:'mock-tests',
          element: <MockTest/>
        },
        {
          path:'reports',
          element: <Reports/>
        }      
      ]
    },

    {
      path:"/dashboard",
      element: <div>
        <Navbar/>
        <Dashboard/>
        </div>
    },

    {
      path:"/student/:id",
      element: <div>
        <Navbar/>
        <Param/>
      </div>
    },

    {
      path:"*",
      element:<NotFound/>
    }
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
