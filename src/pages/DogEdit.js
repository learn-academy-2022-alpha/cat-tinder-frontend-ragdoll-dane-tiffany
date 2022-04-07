import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import DogForm from '../components/DogForm'

export class DogEdit extends Component {
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

  componentDidMount() {
    const { id, ...rest } = this.props.dog
    this.setState({ form: rest })
  }

  handleChange = (e) => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.updateDog(this.state.form, this.props.dog.id)
    this.setState({ submitted: true })
  }

  render() {
    const { form } = this.state
    const { id } = this.props.dog
    return (
      <>
        <h1>Update {this.props.dog.name}'s Info</h1>
        <DogForm
          form={form}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          buttonText='Update Your Pup'
        />
        {
          this.state.submitted && <Redirect to={`/dogshow/${id}`} />
        }
      </>
    )
  }
}

export default DogEdit
