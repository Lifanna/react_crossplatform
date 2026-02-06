import { createBrowserRouter } from 'react-router-dom';
// import { HomePage } from '@/components/Home/HomePage';
import { LoginPage } from '../components/Login/LoginPage';
import { RegisterPage } from '../components/Register/RegisterPage';


export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
]);
