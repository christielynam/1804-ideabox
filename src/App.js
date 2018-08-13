import React, { Component } from 'react';
import IdeaForm from './IdeaForm'
import './App.css';
import IdeaContainer from './IdeaContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    const ideas = [...this.state.ideas, newIdea]
    this.setState({ ideas })
  }

  deleteIdea = (id) => {
    const ideas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ ideas })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IdeaBox</h1>
          <IdeaForm addIdea={this.addIdea} />
        </header>
        <IdeaContainer 
          ideas={this.state.ideas} 
          deleteIdea={this.deleteIdea} 
        />
      </div>
    );
  }
}

export default App;
