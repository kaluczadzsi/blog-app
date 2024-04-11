import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from '../store';
import Root from './components/Root.tsx';
import Error from './routes/Error.tsx';
import Home from './routes/Home.tsx';

import PostInfo from './components/PostInfo.tsx';
import './index.css';
import About from './routes/About.tsx';
import Post from './routes/Post.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/:id',
        element: <PostInfo />,
        errorElement: <Error />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/post',
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
