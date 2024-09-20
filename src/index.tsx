import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import normalTheme from './styles/Normal.styled';
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Posts from './routes/posts';
import Login from './routes/login';
import { getPosts } from './services/getPosts';
import { getPost } from './services/getPost';
import Post from './routes/post';
import AdminPosts from './routes/admin-posts';
import { getAdminPosts } from './services/getAdminPosts';
import Logout from './routes/logout';
import AdminPostEdit from './routes/admin-post-edit';
import AdminPostNew from './routes/admin-post-new';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      
      {
        path: "/",
        element: <Posts />,
        loader: async () => {
          return getPosts()
        },
      },
      {
        path: "/admin/post/new",
        element: <AdminPostNew />,
      },
      {
        path: "/post/:postId",
        element: <Post />,
        loader: async (params) => {
          return getPost(params.params.postId as string)
        },
      },
      {
        path: "/admin/post/edit/:postId",
        element: <AdminPostEdit />,
        loader: async (params) => {
          return getPost(params.params.postId as string)
        },
      },
      {
        path: "/admin",
        element: <AdminPosts />,
        loader: async () => {
          return getAdminPosts()
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
