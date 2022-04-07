import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DogForm from '../components/DogForm';

export class DogNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        age: '',
        enjoys: '',
        image: ''
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createNewDog(this.state.form)
    this.setState({ submitted: true })
  }

  render() {
    const { form } = this.state
    return (
      <>
        <h1>Create A New Dog</h1>
        <DogForm
          form={form}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          buttonText='Add Your Pup'
        />
        {
          this.state.submitted && <Redirect to='/dogindex' />
        }
        {/* <Form className='form'>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="What's your dog's name?"
              onChange={this.handleChange}
              value={name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              name="age"
              placeholder="What's your dog's age?"
              onChange={this.handleChange}
              value={age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              placeholder="What's does your dog enjoy?"
              onChange={this.handleChange}
              value={enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Muttshot</Label>
            <Input
              type="url"
              name="image"
              placeholder="What does your dog look like?"
              onChange={this.handleChange}
              value={image}
            />
          </FormGroup>
          <Button
            color='dark'
            className='submit-btn'
            onClick={this.handleSubmit}
          >
            Add Your Pup
          </Button>
          {
            this.state.submitted && <Redirect to='/dogindex' />
          }
        </Form> */}
      </>
    )
  }
}

export default DogNew
