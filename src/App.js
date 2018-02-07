import React, { Component } from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import asyncComponent from './AsyncComponent';
import "./App.css";
const Home = asyncComponent(() => import('./containers/Home').then(module => module.default));
const Blog = asyncComponent(() => import('./containers/Blog').then(module => module.default));
const NotFound = asyncComponent(() => import('./containers/NotFound').then(module => module.default));

const history = createBrowserHistory();


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <header className="header">
            <nav className="navbar container">
              <div className="navbar-brand">
                <Link to="/">
                  <span className="navbar-item">Lazy Loading Routes</span>
                </Link>
              </div>

              <div className="navbar-end">
                <Link to="/blog">
                  <span className="navbar-item">Blog</span>
                </Link>
              </div>
            </nav>
          </header>
          <section className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route path="*" component={NotFound} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
