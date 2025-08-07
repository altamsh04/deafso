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
      path:'/api/v1/student/login',
      element:<LoginForm/>
    },
    {
      path:'/api/v1/student/signup',
      element:<SignUp/>
    },
    {
      path:'/student/dashboard',
      element:<DashboardPage/>
    },
    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/api/v1/teacher/login',
      element:<Login/>
    },
    {
      path:'/api/v1/teacher/signup',
      element:<Signup/>
    }
  ]);
  
  return (
      <>
        <RouterProvider router={Approuter}/>
      </>
  )
}

export default App;
