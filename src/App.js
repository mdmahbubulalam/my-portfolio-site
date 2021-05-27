import logo from './logo.png';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top nav-bg">
              <div class="container">
                  <a class="navbar-brand logo text-info" href="#home">
                      {/* <img src={logo} class="logo" alt=""/> */}
                      Mohammad Mahbubul Alam
                  </a>
                  <button class="navbar-toggler ms-auto p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon" ></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav ms-auto">
                          <li class="nav-item">
                              <a class="nav-link text-white left-underline font-weight-bold" aria-current="page" href="#home">Home</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link text-white left-underline font-weight-bold" aria-current="page" href="#about">About</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link text-white left-underline font-weight-bold" aria-current="page" href="#resume">Resume</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link text-white left-underline font-weight-bold" aria-current="page" href="#projects">Projects</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link text-white left-underline font-weight-bold" aria-current="page" href="#blogs">Blogs</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link text-white left-underline font-weight-bold" aria-current="page" href="#contact">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <Home />
          <About />
          <Resume />
          <Projects />
          <Blogs />
          <Contact />
          <Footer />
      
          {/* <Router>
            <Switch>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
          </Switch>
        </Router> */}
         
      </div>
    
  );
}

export default App;
