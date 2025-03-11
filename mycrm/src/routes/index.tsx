import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Test from "./pages/Test";

const router = createBrowserRouter([
    {
        element : <DefaultLayout />,
        children : [
            {
                path : '/',
                element : <Test />
            }
        ]
    }
]);

export default function Router(){
    return <RouterProvider router={router}/>
}