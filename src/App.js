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
import { Container } from 'reactstrap'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogs: mockDogs
    }
  }

  createNewDog = (dog) => {
    console.log('Created a new dog', dog)
    // this is temporary to show new dogs
    const dogs = [...this.state.dogs]
    dog.id = dogs.length + 1
    this.setState({ dogs: [...dogs, dog] })
  }

  updateDog = (dog, id) => {
    console.log('Updated dog', dog, 'with id:', id)
    // this is temporary to show that dog updates
    const { dogs } = this.state
    const dogIdxToUpdate = dogs.findIndex(dog => dog.id === id)
    const newDogsArr = [...dogs]
    newDogsArr.splice(dogIdxToUpdate, 1, { ...dog, id: id })
    this.setState({ dogs: newDogsArr })
  }

  render() {
    return (
      <Router>
        <Header />
        <Container className='page-content'>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route
              path="/dogindex"
              render={(props) => <DogIndex dogs={this.state.dogs} />}
            />

            <Route
              path="/dogshow/:id"
              render={(props) => {
                const id = props.match.params.id
                const dog = this.state.dogs.find(dogObj => dogObj.id === +id)
                return <DogShow dog={dog} />
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
