import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyles from '../../components/GlobalStyles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import About from '../About';
import Blog from '../Blog';
import RestaurantsPage from '../RestaurantsPage';
import RestaurantPage from '../RestaurantPage';
import NotFound from '../NotFound';
import UniversalPage from '../UniversalPage';

const headerUrls = [
  { name: 'Restaurants', to: '/' },
  { name: 'about us', to: '/about' },
  // Uncomment when available
  // { name: 'Blog', to: '/blog' }
];
const footerUrls = [
  { name: 'My account', to: '/' },
  { name: 'Favorites', to: '/' },
  { name: 'Terms', to: '/' },
  { name: 'Restaurants', to: '/' },
  { name: 'Privacy', to: '/' },
  { name: 'About us', to: '/about' },
  { name: 'Contact', to: '/' },
  { name: 'Blog', to: '/' },
];

const RenderView = ({ newFooter: { column } }) => {
  console.log({ column });
  return (
    <div>
      <GlobalStyles />
      <Header links={headerUrls} />
      <Switch>
        <Route path="/" component={RestaurantsPage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/:slug" component={UniversalPage} exact />
        <Route path="/:id/:content" component={RestaurantPage} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer links={footerUrls} columns={column} />
    </div>
  );
};

export default RenderView;
