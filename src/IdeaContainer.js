import React from 'react'
import IdeaCard from './IdeaCard'

const IdeaContainer = ({ ideas, deleteIdea }) => {
  const displayIdeas = ideas.map(idea => (
    <IdeaCard 
      {...idea} 
      key={idea.id}
      deleteIdea={deleteIdea}
    />))

  return (
    <div>
      {displayIdeas}
    </div>
  )
}

export default IdeaContainer