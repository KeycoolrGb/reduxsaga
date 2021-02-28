import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import TodolistApi from "./pages/Todolist/TodolistApi";
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail/Detail";
import Profile from "./pages/Profile/Profile";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about" exact component={About}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/todolistapi" exact component={TodolistApi}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
          <Route path="/profile" exact component={Profile}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="*" component={PageNotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
