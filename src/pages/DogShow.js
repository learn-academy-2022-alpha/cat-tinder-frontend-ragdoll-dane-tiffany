import React, { Component } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { NavLink, Redirect } from 'react-router-dom'
import { Button, Card, CardBody, CardFooter, CardText, Form, FormGroup, Input, Label } from 'reactstrap'

export class DogShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleted: false,
      comment: '',
    }
  }

  handleDelete = () => {
    this.props.deleteDog(this.props.dog.id)
    this.setState({ deleted: true })
  }

  handleDeleteComment = (commentid) => {
    this.props.deleteComment(commentid)
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value })
  }

  handleSubmit = () => {
    const comment = {
      review: this.state.comment,
      dog_id: this.props.dog.id
    }
    this.props.createComment(comment)
  }

  render() {
    let { dog } = this.props
    return (
      <>
        <h1>Meet Me</h1>
        <div className='profile-content'>
          <img
            src={dog.image}
            alt={`${dog.name} the dog`}
            className='center profile-img'
          />
          <h2 className='center text-margin'>Hi, my name is {dog.name}!</h2>
          <h3 className='center text-margin'>
            {dog.name} is {dog.age} {dog.age > 1 ? 'years' : 'year'} old and enjoys {dog.enjoys.toLowerCase()}.
          </h3>
          <div className='btn-container'>
            <NavLink
              className='update-btn'
              to={`/dogedit/${dog.id}`}
            >
              <Button
                color='dark'
              >
                Update Info
              </Button>
            </NavLink>
          </div>
          <div className='btn-container'>
            <Button
              className='update-btn'
              onClick={this.handleDelete}
              color='dark'
            >
              Delete Dog
            </Button>
          </div>
          <>
            <Form className='form'>
              <FormGroup>
                <Label for="name">Add a comment</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Throw me a bone..."
                  onChange={this.handleChange}
                  value={this.state.comment}
                />
              </FormGroup>
              <Button
                color='dark'
                className='submit-btn'
                onClick={() => this.handleSubmit()}
              >
                Add Comment
              </Button>
            </Form>
          </>
          <div id='comments'>
            {
              dog.comments && dog.comments.map(comment => (
                <Card key={comment.id}>
                  <CardBody className='body-text'>
                    <CardText>
                      {comment.review}
                    </CardText>
                    <div className='btn-wrapper'>
                      <FaRegTrashAlt className='icon' onClick={() => this.handleDeleteComment(comment.id)} />
                    </div>
                  </CardBody>
                  <CardFooter>
                    Created At: {new Date(comment.created_at).toLocaleDateString()}
                  </CardFooter>
                </Card>
              ))
            }
          </div>
        </div>
        {
          this.state.deleted && <Redirect to='/dogindex' />
        }
      </>
    )
  }
}

export default DogShow
