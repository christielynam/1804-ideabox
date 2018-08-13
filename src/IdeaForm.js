import React, { Component } from 'react'

class IdeaForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addIdea(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.title}
          name='title'
          placeholder='Title'
          onChange={this.handleChange}
        />
        <input 
          type='text'
          value={this.state.body}
          name='body'
          placeholder='Body'
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default IdeaForm

