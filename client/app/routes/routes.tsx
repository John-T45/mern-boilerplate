import Homepage from '../components/Homepage';
import Dashboard from '../components/Dashboard';
import Notes from '../components/Notes';
import Login from '../components/Login';
import Signup from '../components/Signup';
import ForgotPassword from '../components/ForgotPassword';
import page404 from '../components/404';
import Logout from '../components/Logout';

const routes = [
  { path: '/', exact: true, name: 'Homepage', component: Homepage },
  { path: '/notes', name: 'Notes', component: Notes },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Signup', component: Signup },
  { path: '/logout', name: 'Logout', component: Logout },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    private: true,
    component: Dashboard,
  },
  { path: '*', component: page404 },
];

export default routes;