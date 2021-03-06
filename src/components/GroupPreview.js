import React from 'react'
import { withRouter } from "react-router"
import { Thread } from './Thread';

export const GroupPreview = withRouter((props) => {
  let activeConversations
  let threadTitles = []
  if (props.threads.length > 0) {
    for (let i=0; i < props.threads.length && i < 3; i++) {
      threadTitles.push(
        <li class="list-group-item">{props.threads[i].title}</li>
      )
    }
    activeConversations = <div>
      <div class="card-header text-center">
        Active Conversations
      </div>
      <ul class="list-group list-group-flush">
        {threadTitles}
      </ul>
    </div>
  }

  let url = "/community/" + props.groupId
  return (
    <div className="card col-sm m-3">
      <div className="card-body">
        <a href={url} className="float-right ml-3">join</a>
        <h3 className="card-title">{props.name}</h3>
        <h5 className="card-subtitle mb-3 text-muted">{props.description}</h5>
        {activeConversations}
      </div>
    </div>
  )
})
