import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {link} from 'react-router-dom'
import Qeenah from './qeenah';
import Another from './another';
import Kirah from './kirah';
import Contact from './contact';
import Product from './product';
import { Children } from 'react';
import Root from './Root';
import Error from './error';

let qee=createBrowserRouter([

  {path:'/',element: <Root/>,
  errorElement:<Error />,
children:[
    {path: '/', element: <Another/>},
    {path: '/kirah', element: <Kirah/>},
    {path: '/product', element: <Product/>},
    {path: '/contact', element: <Contact/>},
]}] 
)


function App() {
  return (
    <div >
      <RouterProvider router={qee}/>
    </div>
  );
}

export default App;
