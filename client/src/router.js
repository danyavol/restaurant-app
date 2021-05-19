import { createWebHistory, createRouter } from "vue-router"
import Home from '@/pages/HomePage'
import OrderTable from '@/pages/OrderTablePage'
import NotFound from '@/pages/NotFound'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/order",
        name: "OrderTable",
        component: OrderTable,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior () {
        window.scrollTo(0, 0);
        return { x: 0, y: 0 }
    }
});

export default router;