import React from 'react';
import './App.css';
import TodoPage from './pages/TodoPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPage from './pages/AuthPages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoPage/>
  },
  {
    path: "login",
    element: <AuthPage/>
  }
])




export default function App() {

  return (
    <RouterProvider router={router}/>
  );
}
