import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Course from "../components/Course/Course";
import NotFound from "../components/NotFound/NotFound";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Teachers from "../components/Teachers/Teachers";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/course">
            <Course />
          </Route>

          <Route path="/teachers">
            <Teachers />
          </Route>

          <Route path="/404">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
