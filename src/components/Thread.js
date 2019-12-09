import React from 'react';
import { withRouter } from "react-router"
import { useQuery } from '@apollo/react-hooks';
import { THREAD } from '../services/graphql/queries'
import { errorHandler } from '../services/graphql/errorHandler'
import { AddResponse } from './AddResponse';
import { Post } from './Post';

export const Thread = withRouter((props) => {
  const { threadId } = props.match.params
  const { loading, error, data } = useQuery(THREAD, { variables: { id: threadId } },
  {
    onError(error) {
       errorHandler(error, props.history)
    }
  })

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  let posts
  if (data.thread && data.thread.posts.length > 0) {
    posts = <div class="ml-0">
              {data.thread.posts.map((post) =>
                <Post key={post.id} body={post.content} />
              )}
            </div>
  } else {
    posts = <p class='m-3 pb-3'>noone has responded yet, be the first to respond</p>
  }

  if (data.thread) {
    return (
      <div class="border-bottom border-gray m-3">
        <h2>{data.thread.title}</h2>
        <AddResponse threadId={threadId} />
        {posts}
      </div>
    )
  } else {
    return (
      <div class="border-bottom border-gray m-3">
        <p>Thread not found</p>
      </div>
    )
  }
})