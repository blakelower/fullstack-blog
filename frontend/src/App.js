import React from "react";
import Navigation from "./components/navigation";
// import PageRenderer from './components/page-renderer';
import Home from './pages/home';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Login from './pages/login';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  const user = {
    firstName: 'Blake',
    lastName: 'Coder'
  }

  return (
    <Router>
    <div className="App">
      <Navigation user={user}/>
      {/* <Switch> */}
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        {/* <Route path='/:path' component={PageRenderer} />
        <Route path="/" render={() => <Redirect to="/home" />} /> */}
      {/* </Switch> */}
    </div>
    </Router>
  );
}

export default App;
