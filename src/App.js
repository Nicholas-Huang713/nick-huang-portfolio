import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const currentPage = useSelector(state => state.currentPage)
  return (
    <div>
      <div className={`${currentPage==="home" ? "app-bg" : "bg-white"}`}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>      
    </div>
  );
}

export default App;
