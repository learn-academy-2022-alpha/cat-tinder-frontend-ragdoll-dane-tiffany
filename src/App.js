import React, { Component } from 'react'
import './App.css'
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
import { Container } from 'reactstrap'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogs: []
    }
  }

  componentDidMount() {
    this.readDog()
  }

  createNewDog = (newDog) => {
    fetch("http://localhost:3000/dogs", {
      body: JSON.stringify(newDog),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => this.readDog())
      .catch(errors => console.log(errors))
  }

  readDog = () => {
    fetch("http://localhost:3000/dogs")
      .then(response => response.json())
      .then(payload => this.setState({ dogs: payload }))
      .catch(errors => console.log(errors))
  }

  updateDog = (updatedDog, id) => {
    fetch(`http://localhost:3000/dogs/${id}`, {
      body: JSON.stringify(updatedDog),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then(response => response.json())
      .then(payload => this.readDog())
      .catch(errors => console.log(errors))
  }

  deleteDog = (id) => {
    fetch(`http://localhost:3000/dogs/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(payload => this.readDog())
      .catch(errors => console.log(errors))
  }

  createComment = (comment) => {
    fetch('http://localhost:3000/comments', {
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => this.readDog())
      .catch(err => console.error(err))
  }

  deleteComment = (id) => {
    fetch(`http://localhost:3000/comments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(payload => this.readDog())
      .catch(errors => console.log(errors))
  }

  render() {
    return (
      <Router>
        <Header />
        <Container className='page-content'>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home dogs={this.state.dogs} />}
            />

            <Route
              path="/dogindex"
              render={(props) => <DogIndex dogs={this.state.dogs} />}
            />

            <Route
              path="/dogshow/:id"
              render={(props) => {
                const id = props.match.params.id
                const dog = this.state.dogs.find(dogObj => dogObj.id === +id)
                return <DogShow
                  dog={dog}
                  createComment={this.createComment}
                  deleteDog={this.deleteDog}
                  deleteComment={this.deleteComment}
                />
              }}
            />

            <Route
              path="/dognew"
              render={(props) =>
                <DogNew createNewDog={this.createNewDog} />}
            />

            <Route
              path="/dogedit/:id"
              render={(props) => {
                const id = props.match.params.id
                const dog = this.state.dogs.find(dogObj => dogObj.id === +id)
                return <DogEdit dog={dog} updateDog={this.updateDog} />
              }}
            />

            <Route component={NotFound} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    )
  }
}

export default App
