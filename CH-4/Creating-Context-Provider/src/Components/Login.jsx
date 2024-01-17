import React from 'react';
import UserContext from '../context/userContext';

function Login() {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {setUser} = React.useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
    setUsername('');
    setPassword('');
  }

  return (
    <>
      <h2>LogIn</h2>
      <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />{" "}
      <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login;