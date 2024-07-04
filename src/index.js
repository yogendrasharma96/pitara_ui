import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddProduct from './modules/body/AddProduct';
import { Provider } from 'react-redux';
import appStore from './modules/redux/appStore';
import SignUp from './modules/auth/SignUp';
import ConfirmationSignUp from './modules/auth/ConfirmationSignUp';
import Login from './modules/auth/Login';
const appRoute=createBrowserRouter([
{
  path:'/',
  element: <App/>,
  children:[
    {
      path:'/',
      element: <AddProduct/>
    },
    {
      path:'add',
      element: <AddProduct/>
    },
    {
      path:'signUp',
      element: <SignUp/>,
    },
    {
      path:'signUp/confirm',
      element: <ConfirmationSignUp/>
    },
    {
      path:'login',
      element: <Login/>
    }
  ]
}
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
  <RouterProvider router={appRoute}>
    <div className="h-screen">
      <App />
    </div>
    </RouterProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
