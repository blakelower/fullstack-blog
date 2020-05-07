import React from "react";
import Navigation from "./components/navigation";
// import PageRenderer from './components/page-renderer';
import Home from './pages/home';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Login from './pages/login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        {/* <Route path='/:path' component={PageRenderer} />
        <Route path="/" render={() => <Redirect to="/home" />} /> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
