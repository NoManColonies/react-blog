/* global fetch */

import React, { useState, useEffect, ReactElement } from 'react'
import withHelmet from '../utils/withHelmet'
import { useParams } from 'react-router-dom'

async function getPost(id: string): Promise<any> {
  const response = await fetch(`http://localhost:3333/api/posts/${id}`, {
    method: 'get'
  })

  return response.json()
}

interface PostStateType {
  title: string;
  content: string;
  cover_image_url: string;
}

function usePostData(postId: string): any {
  const [post, setPost] = useState<PostStateType>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(undefined)

  async function retreiveData(): Promise<any> {
    try {
      setIsLoading(true)
      const postResponse = await getPost(postId)
      setPost(postResponse)
    } catch (e) {
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }

  return [{ post, isLoading, error }, { retreiveData }]
}

function Story(): ReactElement {
  const { storyId } = useParams()
  const [{ post, isLoading, error }, { retreiveData }] = usePostData(storyId)

  useEffect(() => {
    retreiveData && retreiveData()
  }, [retreiveData])

  if (isLoading) return <div>...Loading</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      Story: {storyId}
      <div>
        <p>{post && post.title}</p>
        <p>{post && post.content}</p>
      </div>
    </div>
  )
}

export default withHelmet('Blog App |')(Story)
