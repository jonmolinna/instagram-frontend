import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../page/ErrorPage';
import Feed from '../page/Feed';
import Login from '../page/Login';
import Register from '../page/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Feed />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />
    }
]);

export default router;