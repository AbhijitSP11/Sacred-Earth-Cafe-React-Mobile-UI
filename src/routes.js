import Cart from "./components/Cart/Cart";
import Beverages from "./pages/Beverages/Beverages";
import Desserts from "./pages/Desserts/Desserts";
import Food from "./pages/Food/Food";
import Special from "./pages/Special/Special";

export const routes = [
    {
        path: '/',
        Component: Special,
    },
    {
        path: '/Special',
        Component: Special,
    },
    {
        path: '/main',
        Component: Food,
    },
    {
        path: '/beverages',
        Component: Beverages,
    },
    {
        path: '/desserts',
        Component: Desserts,
    },
    {
        path: '/place-order',
        Component: Cart,
    },
    {
        path: '/events',
        Component: Desserts,
    },
  
];
