import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home'; // Import your Home component

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navigation bar can be added here */}
        <header className="App-header">
          {/* Your header content, logo, etc. */}
        </header>
        {/* Define your routes */}
        <Switch>
          <Route exact path="/" component={Home} /> {/* Landing page */}
          {/* Add more routes for other sections/components */}
          {/* Example: */}
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/work" component={WorkExperience} /> */}
          {/* <Route path="/education" component={Education} /> */}
          {/* <Route path="/contacts" component={Contacts} /> */}
          {/* <Route path="/projects" component={Projects} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
