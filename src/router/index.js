import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import MealsByName from '../views/MealsByName.vue';
import MealDetails from '../views/MealDetails.vue';
import Ingredients from '../views/Ingredients.vue';
import Categories from '../views/Categories.vue';
import MealsByCategory from '../views/MealsByCategory.vue';
import MealsByArea from '../views/MealsByArea.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName,
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter,
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: Ingredients,
      },
      {
        path: '/by-ingredient/:ingredient',
        name: 'byIngredient',
        component: MealsByIngredient,
      },
      {
        path: '/categories',
        name: 'categories',
        component: Categories,
      },
      {
        path: '/by-category/:category?',
        name: 'byCategory',
        component: MealsByCategory,
      },
      {
        path: '/by-area/:area?',
        name: 'byArea',
        component: MealsByArea,
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails,
      },
    ],
  },
  {
    path: '/guest',
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
