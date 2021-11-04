import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/topNav/nav.jsx";
import Login from "./views/login/login.jsx";
import Register from "./views/register/register.jsx";
import Settings from "./views/settings/settings.jsx";
import Home from "./views/home/home.jsx";
import SinglePage from "./views/singlePage/singlePage.jsx";
import Write from "./views/write/write.jsx";

function App() {

  const user = false; 
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/login">{user ? <Home/> : <Login/>}</Route>
        <Route path="/register">{user ? <Home/> : <Register/>}</Route>
        <Route path="/write">{user ? <Write/> : <Register/>}</Route>
        <Route path="/settings">{user ? <Settings/> : <Register/>}</Route>
        <Route path="/post/:postId"><SinglePage/></Route>
      </Switch>
    </Router>
  );
}

export default App;
