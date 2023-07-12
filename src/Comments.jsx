import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => {
        setComments(response.data);
      });
  }, [postId]);

  return (
    <section className="comments">
      {comments.map(comment => (
        <div key={comment.id}>
          <h5>{comment.name}</h5>
          <p>{comment.body}</p>
        </div>
      ))}
    </section>
  );
}

export default Comments;
