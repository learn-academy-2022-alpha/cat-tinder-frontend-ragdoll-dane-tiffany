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

      </>
    )
  }
}

export default DogNew
