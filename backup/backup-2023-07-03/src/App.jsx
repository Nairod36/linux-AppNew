import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Users from './Users';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      });
  }, []);

  return (
    <div className="App">
      {users.map(user => (
        <Users key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
