import './App.css';
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import GalleryPage from './Components/Gallery.component';
import AboutPage from './Components/About';
import ContactPage from './Components/Contact.component';
import ServicesPage from './Components/services.component';
import BlogPage from './Components/BlogPage.component';
import CareerPage from './Components/CareerPage.component'

import Myheader from './Components/header.component';
import HomePage from './Components/HomePage';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Gallery" component={GalleryPage} />
      <Route exact path="/About" component={AboutPage} />
      <Route exact path="/Contact" component={ContactPage} />
      <Route exact path="/Services" component={ServicesPage} />
      <Route exact path="/Blog" component={BlogPage} />
      <Route exact path="/CareerPage" component={CareerPage} />
      </Switch>
  </Router>
  );
}

export default App;
