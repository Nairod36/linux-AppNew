import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => {
        setComments(response.data);
      });
  }, [postId]);

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <h5>{comment.name}</h5>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
