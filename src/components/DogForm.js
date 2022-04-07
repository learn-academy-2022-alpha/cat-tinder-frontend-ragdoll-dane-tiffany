import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class DogForm extends Component {
  render() {
    const { form, handleChange, handleSubmit, buttonText } = this.props
    return (
      <>
        <Form className='form'>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="What's your dog's name?"
              onChange={(e) => handleChange(e)}
              value={form.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              name="age"
              placeholder="What's your dog's age?"
              onChange={(e) => handleChange(e)}
              value={form.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              placeholder="What's does your dog enjoy?"
              onChange={(e) => handleChange(e)}
              value={form.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Muttshot</Label>
            <Input
              type="url"
              name="image"
              placeholder="What does your dog look like?"
              onChange={(e) => handleChange(e)}
              value={form.image}
            />
          </FormGroup>
          <Button
            color='dark'
            className='submit-btn'
            onClick={() => handleSubmit()}
          >
            {buttonText}
          </Button>
        </Form>
      </>
    )
  }
}

export default DogForm
