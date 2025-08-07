import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './Auth/login/Login'
import SignUp from './Auth/signup/SignUp';
import DashboardPage from './ui/DashboardPage';
import HomePage from './ui/HomePage';

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
      element:<DashboardPage/>
    },
    {
      path:'/',
      element:<HomePage/>
    }
  ]);
  
  return (
      <>
        <RouterProvider router={Approuter}/>
      </>
  )
}

export default App;
