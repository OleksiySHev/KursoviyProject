import NewsPage from "./page/NewsPage";
import ContactsPage from "./page/ContactsPage";
import HomePage from "./page/HomePage";
import EquipmentPage from "./page/EquipmentPage";
import NewsElementPage from "./page/NewsElementPage";

export const routes = [
    {
        path: '/news',
        Component: NewsPage
    },
    {
        path: '/news/:id',
        Component: NewsElementPage
    },
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '/equipments',
        Component: EquipmentPage
    },
]