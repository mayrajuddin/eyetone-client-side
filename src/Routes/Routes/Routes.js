import { createBrowserRouter, } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Reviews from "../../Pages/Reviews/Reviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch(`${process.env.REACT_APP_API_URI}/services`)
            },
            {
                path: '/service-details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URI}/services/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>,
                loader: () => fetch(`${process.env.REACT_APP_API_URI}/services`)
            },
            {
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URI}/reviews/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])