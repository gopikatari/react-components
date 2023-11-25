import React, { useState, useEffect } from 'react';
import Spinner from './common/spinner';
import Alert from './common/alert';
import useFetch from './customHooks/useFetch';
import useToggle from './customHooks/useToggle';

const App = () => {
  const [loading, error, data] = useFetch('https://api.github.com/users');
  const [show, toggle] = useToggle(false);

  console.log(loading, error, data);
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [show, setShow] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const resp = await fetch('https://api.github.com/users');
  //       const users = await resp.json();
  //       setUsers(users);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log('error----', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const handleToggle = () => setShow(!show);
  return (
    <>
      {show && (
        <Alert
          content='Hello from the content'
          type='success'
          autoClose={true}
        ></Alert>
      )}
      <h3>UseEffect Fetch Example</h3>
      <button className='btn' onClick={toggle}>
        toggle
      </button>

      <ul>
        {loading && <Spinner />}
        {data &&
          data.map((user) => {
            return (
              <li className='listitem' key={user.id}>
                <img src={user.avatar_url} />
                <div>
                  <h4>{user.login}</h4>
                  <a href={user.html_url}>profile</a>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default App;
