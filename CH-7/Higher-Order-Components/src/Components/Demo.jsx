import React, { useEffect } from 'react';
import axios from 'axios';
import {debounce} from 'lodash';

function Demo() {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const throttledSearch = debounce(async () => {
      setLoading(true);
      try {
        await axios.get(
          `https://api.randomuser.me/?net=us.qb&results=50`
        ).then((res) => {
          console.log(res.data.results);
          setData(res.data.results);
        })
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
  }, 2000);

  useEffect(() => {
      throttledSearch();
  }, []);

  return (
    <>
        <h1>Higher Order Components</h1>
        <p>Higher Order Components are a pattern that emerged from React's compositional nature.</p>
        {loading && <h5>Loading...</h5>}
        {
            data.map((user, index) => {
                return (
                    <div key={index}>
                        <hr />
                        <img src={user.picture.large} alt="user" />
                        <p>{user.name.title} {user.name.first} {user.name.last}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.location.city}, {user.location.state}, {user.location.country}</p>
                        <p>User Name:{user.login.username}</p>
                        <p>Password: {user.login.password}</p>
                        <hr />
                    </div>
                )
            })
        }
    </>
  )
}

export default Demo