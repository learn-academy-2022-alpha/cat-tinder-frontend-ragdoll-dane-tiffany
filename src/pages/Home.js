import React, { Component, createRef } from 'react'
import { NavLink } from 'react-router-dom'
import TinderCard from 'react-tinder-card'
import { Button, Card, CardBody, CardFooter, CardHeader, Collapse } from 'reactstrap'
import { GiSniffingDog } from 'react-icons/gi'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.swipeRef = createRef()
    this.toggle = this.toggle.bind(this);
    this.state = {
      favs: [],
      cycled: false,
      collapse: false
    }
  }

  handleSwipe = (dir, i) => {
    if (dir === 'right') {
      this.setState({ favs: [...this.state.favs, this.props.dogs[i]] })
    }
    if (i === 0) {
      this.swipeRef.current.style.display = 'none'
      this.setState({ cycled: true })
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { dogs } = this.props
    return (
      <div className='center'>
        <h1>Welcome to the park buds. <img src="https://img.icons8.com/ios-filled/50/000000/fire-hydrant.png" /><img src="https://img.icons8.com/ios-glyphs/60/000000/dog-pee.png" /></h1>
        <h2>Run Around<img className="dog-icon" src=" https://img.icons8.com/ios-glyphs/60/000000/running-away.png" /> Smell Around <GiSniffingDog className="dog-icon" /> Find The Perfect Buddy <img className="dog-icon" src="https://img.icons8.com/ios-glyphs/60/000000/dog-heart.png" />
        </h2>
        <div
          ref={this.swipeRef}
          className='swipe-container'
        >
          {
            dogs.map((dog, i) => (
              <TinderCard
                key={dog.id}
                onSwipe={(dir) => this.handleSwipe(dir, i)}
              >
                <div>
                  <Card className='swipe-card'>
                    <CardHeader>{dog.name}</CardHeader>
                    <img
                      src={dog.image}
                      alt={`${dog.name} the dog`}
                      className='swipe-img'
                    />
                    <CardFooter>
                      {dog.name} enjoys {dog.enjoys.toLowerCase()}
                    </CardFooter>
                  </Card>
                </div>
              </TinderCard>
            ))
          }
        </div>
        {
          !this.state.cycled ?
            <>Swipe right to match with pup</> :
            <div className='match-cards'>
              <Button
                color="dark"
                onClick={this.toggle}
                style={{ marginBottom: '1rem' }}
              >
                {
                  !this.state.collapse ? <>Show Matches</> : <>Hide Matches</>
                }
              </Button>
              <Collapse
                isOpen={this.state.collapse}
              >
                {
                  this.state.favs.length ?
                    this.state.favs.map(fav => (
                      <Card key={fav.id}>
                        <CardHeader>{fav.name}</CardHeader>
                        <CardBody>
                          <NavLink to={`/dogshow/${fav.id}`}>
                            <img
                              src={fav.image}
                              className='card-img'
                              alt={`${fav.name} the dog`}
                            />
                          </NavLink>
                        </CardBody>
                      </Card>
                    )) : <>You have no matches</>
                }
              </Collapse>
            </div>
        }
      </div>
    )
  }
}

export default Home
