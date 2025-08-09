import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './student/Auth/login/Login'
import SignUp from './student/Auth/signup/SignUp';
import DashboardPage from './student/ui/DashboardPage';
import HomePage from './student/ui/HomePage';
import Login from './teacher/Auth/login/Login';
import Signup from './teacher/Auth/signUp/SignUp';

function App() {
  const Approuter=createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/student/login',
      element:<LoginForm/>
    },
    {
      path:'/student/signup',
      element:<SignUp/>
    },
    {
      path:'/student/dashboard',
      element:<DashboardPage/>
    },
    {
      path:'/teacher/login',
      element:<Login/>
    },
    {
      path:'/teacher/signup',
      element:<Signup/>
    }
  ]);
  
  return (
      <>
        <RouterProvider router={Approuter}/>
        {/* <SignupForm/> */}
      </>
  )
}

export default App;
