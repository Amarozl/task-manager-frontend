import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TasksView from "../views/TasksView.vue";
import CategoriesView from "../views/CategoriesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoriesView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
