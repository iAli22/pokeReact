import HomePage from '../pages/HomePage';
import PokemonDetailPage from '../pages/PokemonDetailPage';
import NotFoundPage from '../pages/NotFoundPage';

export interface AppRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

const ROUTES: AppRoute[] = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/pokemon/:name',
    component: PokemonDetailPage
  },
  {
    // Catch-all route for 404
    path: '*',
    component: NotFoundPage
  }
];

export default ROUTES;
