import React from 'react';
import './App.css';
import Admin from './Components/Admin';
import { Route, HashRouter } from "react-router-dom";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { useSelector,useDispatch } from 'react-redux';
import {logOut} from './actions';
import EditStock from './Components/EditStock';

const logout=(dispatch)=>{
  dispatch(logOut());  
}

function App() {
  const logg = useSelector(state => state.logged);
  const dispatch=useDispatch();

  return (
    <div className="wrapper">
      <div className="top_navbar">
        <div className="logo">
          <a href="localhost:3001">Stock Management</a>
        </div>
      </div>
      <div className="main_body">
        <div className="sidebar_menu">
          <div className="inner__sidebar_menu">
            <ul>
              <li>
                <a href="http://localhost:3001/#/" style={{ color: 'white' }}>
                  <span className="icon">
                    <i className="fas fa-user"></i></span>
                  <span className="list">Admin</span>
                </a>
              </li>
              <li>
                <a href="http://localhost:3001/#/dashboard" style={{ color: 'white' }}>
                  <span className="icon"><i className="fa fa-tachometer "></i></span>
                  <span className="list">Dash Board</span>
                </a>
              </li>
              {/* <li>
                  <a href="http://localhost:3001/#/staff" style={{ color: 'white' }} onClick={()=>dispatch(logIn())}>
                    <span className="icon"><i className="fas fa-graduation-cap"></i></span>
                    <span className="list">LogIn</span>
                  </a>
                </li> */}
              {logg ?
                <li>
                  <a href="localhost:3001" style={{ color: 'white' }} onClick={()=>logout(dispatch)}>
                    <span className="icon"><i className="fa fa-sign-out"></i></span>
                    <span className="list">Log Out</span>
                  </a>
                </li> : null
              }
            </ul>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <HashRouter>
        <Route exact path="/" component={() => <Admin></Admin>}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/edit/:stock" component={EditStock}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
