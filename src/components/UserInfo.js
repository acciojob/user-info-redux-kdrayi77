import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail } from '../actions/userActions';

const UserInfo = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(state => state);

  return (
    <div>
      <h1>User Information</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => dispatch(updateName(e.target.value))}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
      />
      <br /><br />

      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
