import Home from "../pages/Home";
import ProductsList from "../pages/ProductsList";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";

export const routerProducts = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/products",
        component: ProductsList
    },
    {
        path: "/product-detail/:id",
        component: ProductDetail
    },
    {
        path: "/cart",
        component: Cart
    }
]