import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Test from "./pages/Test";
import LoginLayout from "./layouts/Login";

const router = createBrowserRouter([
    {
        element : <DefaultLayout />,
        children : [
            {
                path : '/index',
                element : <Test />
            }
        ]
    },
    {
        path : '/login',
        element : <LoginLayout />,
    },
    {
        path : '/',
        element : <Navigate to="/login" replace />
    }
]);

export default function Router(){
    return <RouterProvider router={router}/>
}