import React, { Component } from 'react'
import './App.css'
import mockDogs from './mockDogs'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import DogEdit from './pages/DogEdit'
import DogIndex from './pages/DogIndex'
import DogNew from './pages/DogNew'
import DogShow from './pages/DogShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export class App extends Component {
  render() {
    return (
      <div id='content'>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dogindex" component={DogIndex} />
            <Route path="/dogshow" component={DogShow} />
            <Route path="/dognew" component={DogNew} />
            <Route path="/dogedit" component={DogEdit} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App
