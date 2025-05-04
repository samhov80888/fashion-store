import Home from "../pages/Home";
import Pages from "../pages/Pages";
import ProductDetail from "../pages/ProductDetail";
import Shop from "../pages/Shop";

export const routes = [
    { name: 'Home', path: "/", element: <Home />, index: true },
    { name: 'Shop', path: "/shop", element: <Shop />, index: false },
    { name: 'Products', path: "/product/:id", element: <ProductDetail />, index: false },
    { name: 'Pages', path: "/pages", element: <Pages />, index: false },
]