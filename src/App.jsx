import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './Auth/login/Login'
import SignUp from './Auth/signup/SignUp';

function App() {
  const Approuter=createBrowserRouter([
    {
      path:'/student/login',
      element:<LoginForm/>
    },
    {
      path:'/student/signUp',
      element:<SignUp/>
    },
    {
      path:'/student/dashboard',
      element:<SignUp/>
    }
  ])
  return (
      <>
        <RouterProvider router={Approuter}/>
      </>
  )
}

export default App;
