import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import AddUser from './components/AddUser/AddUser';
import UpdateUser from './components/UpdateUser/UpdateUser';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
    <Login></Login>

      {/* <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/users">
              <Users></Users>
            </Route>
            <Route path="/users/add">
              <AddUser></AddUser>
            </Route>

            <Route path="/users/update/:id">
              <UpdateUser></UpdateUser>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>


          </Switch>
        </div>
      </Router> */}
    </div>
  );
}

export default App;
