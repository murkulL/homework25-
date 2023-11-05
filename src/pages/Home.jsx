import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
    };

    getPosts();
  }, []);
  return (
    <div>
      <h1>Home page</h1>
      
        {posts.map((post) => {
          return (    
            <div className='post'>  
          <Link to={`${post.id}`}>{post.title}</Link>
          <h3>{post.body}</h3>
          </div>   
          );

        })}
    </div>
  );
}

export default Home;
