import React from 'react';
import Posts from './Posts';
import Comments from './Comments';

function Users({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <Posts userId={user.id} />
      <Comments userId={user.id} />
    </div>
  );
}

export default Users;
