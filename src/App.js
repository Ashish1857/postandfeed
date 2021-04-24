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
          {/**We can create HOC */}
            <Route
              exact path={'/home'}
              render={
                ()=>localStorage.getItem("status") === "loggedIn" ? <Home/> : <Login/>
              }
            />
            <Route
              exact path={'/feed'}
              render={
                ()=>localStorage.getItem("status") === "loggedIn" ? <Feed/> : <Login/>
              }
            />
            <Route
              exact path={'/post'}
              render={
                ()=>localStorage.getItem("status") === "loggedIn" ? <Post/> : <Login/>
              }
            />
            <Route
              exact path={'/'}
              render={
                ()=>localStorage.getItem("status") === "loggedIn" ? <Home/> :<Login/>
              }
          />
        </Switch>
  </Router>
    </div>
  );
}

export default App;
