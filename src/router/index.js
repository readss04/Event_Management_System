import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/AdminUsers.vue'
import About from '../views/about.vue'
import Events from '../views/Events.vue'
import Registration from '../views/Registration.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Audreport from '../views/Audience-report.vue'
import Editaud from '../views/Create-event.vue'
import Entrieslist from '../views/Entries-list.vue'
import Profile from '../views/Profile.vue';
import Editevent from '../views/Edit-event.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'users',
      component: Users,
      meta: {requiresAdmin: true}
    },

    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {requiresAuth: true},
      meta: {forUsersOnly: true}
    },

    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/events',
      name: 'events',
      component: Events,
      meta: {requiresAuth: true},
      meta: {forUsersOnly: true}
    },

    {
      path: '/registration',
      name: 'register',
      component: Registration,
      meta: {forUsersOnly: true}
    },

    {
      path: '/home',
      name: 'home',
      component: Home,
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
    },

    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },

    {
      path: '/report',
      name: 'audience-report',
      component: Audreport,
      meta: {requiresAdmin: true}
    },

    {
      path: '/create-event',
      name: 'Create-event',
      component: Editaud,
      meta: {requiresAdmin: true}
    },

    { 
      path: '/entries',
      name: 'Entries-List',
      component: Entrieslist,
      meta: {requiresAdmin: true}
    },

    {
      path: '/editEvent/:eventId',
      name: 'Entries-event',
      component: Editevent,
      meta: {requiresAdmin: true}
    }
    
    /* {
      path: '/abou  t',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    } */
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('authToken'); // Authentication token
  const isAdmin = localStorage.getItem('isAdmin'); // Admin status ('1' for admin, '0' for user)

  // Block unauthenticated users from protected routes
  if (!token &&(to.meta.requiresAuth || to.meta.requiresAdmin)) {
    return next('/login');
  }

  // Restrict access to user-only routes for admins
  if (to.meta.forUsersOnly && isAdmin === '1') {
    return next('/entries'); // Redirect admins to the admin dashboard
  }

  // Restrict access to admin-only routes for non-admins
  if (to.meta.requiresAdmin && isAdmin !== '1') {
    return next('/events'); // Redirect non-admin users to a different page
  }

  next(); // Allow navigation for all other cases
});


export default router