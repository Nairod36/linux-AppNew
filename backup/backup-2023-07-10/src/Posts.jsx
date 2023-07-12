import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Posts({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(response => {
        setPosts(response.data);
      });
  }, [userId]);

  return (
    <div>
      <h3>Articles</h3>
      {posts.map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
