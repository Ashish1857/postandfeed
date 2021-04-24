import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/homePage/HomePage';
import Login from './components/login/Login';
import Post from './components/post/Post';
import Feed from './components/feed/Feed';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
          exact path={'/home'}
          component={Home}
          />
          <Route
          exact path={'/'}
          component={Login}
          />
           <Route
          exact path={'/feed'}
          component={Feed}
          />
           <Route
          exact path={'/post'}
          component={Post}
          />
        </Switch>
  </Router>
    </div>
  );
}

export default App;
