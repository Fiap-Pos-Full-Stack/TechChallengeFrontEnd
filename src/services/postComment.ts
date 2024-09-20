import { API_URL, COMMENT_POSTS_ENDPOINT, POSTS_ROUTE } from "../configs/api"

export const postComment = async (postId : number, name:string, comentary:string)=> {
    return fetch(`${API_URL}/${POSTS_ROUTE}/${COMMENT_POSTS_ENDPOINT}/${postId}`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name, comentary: comentary})
      })
}
