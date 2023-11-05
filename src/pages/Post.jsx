import React , {useEffect, useState }from 'react'
import {useParams} from 'react-router-dom';

function Post() {
  const {id} = useParams();

  const [post, setPost] = useState({});

  useEffect (() => {
    const getPost = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setPost(data);
    };
    getPost();
  }, [id]);
  return (
    <div>
    <h1>Post Page</h1>
    <h5>{post.title}</h5>
    <h3>{post.body}</h3>
    </div>
  )
}

export default Post;