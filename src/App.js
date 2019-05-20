import React, { Component } from 'react'
import Profil from './Component/profil';
import GetList from './Component/GetList/get';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 class App extends Component {
  render() {
    return (
      <div className = "app">
        <Router>
          <Route path='/' exact component={Profil}/>
          {/* <Route path='/liste' component={ GetList}/> */}
        </Router>
        <Router>
          {/* <Route path='/' exact component={Profil}/> */}
          <Route path='/liste' component={ GetList}/>
        </Router>
      </div>      
    )
  }
}
export default App;