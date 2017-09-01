import React, { Component } from 'react';
import Navbar from './commonComponents/Navbar.js';
import Footer from './commonComponents/Footer.js';
import PageAbout from './PageAbout/PageAbout.js';
import PageProjects from './PageProjects/PageProjects.js';
import PageResume from './PageResume/PageResume.js';
import PageHackathons from './PageHackathons/PageHackathons.js';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './scrollToTop.js';
class App extends Component {

  
 
  render() {
    return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
      <div className="container">
        	<Navbar/>
        	 <Switch>
	          <Route exact name="index" path="/" component={PageAbout} />
	          <Route name="about" path="/about" component={PageAbout} />
	          <Route name="projects" path="/projects" component={PageProjects} />
	          <Route name="resume" path="/resume" component={PageResume} />
	          <Route name="cv" path="/cv" component={PageResume} />
	          <Route name="hackathons" path="/hackathons" component={PageHackathons} />
        	</Switch>
        <Footer/>
      </div>
      </ScrollToTop>
   </Router>
    );
  }
}

export default App;
