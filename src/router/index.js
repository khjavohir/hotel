import Home from "@/pages/Home.vue";
import RoomDetails from "@/pages/RoomDetails.vue";
import Rooms from "@/pages/Rooms.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/rooms", component: Rooms },
  { path: "/rooms/:id", component: RoomDetails },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
