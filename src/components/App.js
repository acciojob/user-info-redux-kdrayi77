import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "../redux/actions";

const App = () => {
  const { name, email } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  return (
    <div>
      <h1>User Information</h1>

      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
      </label>

      <br />

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
      </label>

      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

export default App;
