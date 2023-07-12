import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Posts.css';

function Posts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(response => {
        setPosts(response.data);
      });
  }, [userId]);

  return (
    <section className="posts">
      <h3>Articles</h3>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Masquer les articles' : 'Afficher les articles'}
      </button>
      {isOpen && posts.map(post => (
        <article key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </article>
      ))}
    </section>
  );
}

export default Posts;
