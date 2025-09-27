import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Test from "./pages/Test";
import LoginLayout from "./layouts/Login";
import DealsIndex from "./pages/Deals/DealsIndex";
import ProjectsIndex from "./pages/Projects/ProjectsIndex";

const router = createBrowserRouter([
    {
        element : <DefaultLayout />,
        children : [
            {
                path : '/index',
                element : <Test />
            },
            {
                path : '/deals',
                element : <DealsIndex />,
            },
            {
                path : '/projects',
                element : <ProjectsIndex />,
            },
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

export const navigateTo = (path : string) => {
    router.navigate(path);
}

export default function Router(){
    return <RouterProvider router={router}/>
}