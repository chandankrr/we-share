import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  const [inputs, setInputs] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8800/api/auth/register', inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="register">
      <h1>WeShare</h1>
      <div className="center">
        <h1>Register</h1>
        <form>
          <div>
            <input type="text" required name="name" onChange={handleChange} />
            <span></span>
            <label>Name</label>
          </div>
          <div>
            <input
              type="text"
              required
              name="username"
              onChange={handleChange}
            />
            <span></span>
            <label>Username</label>
          </div>
          <div>
            <input type="email" required name="email" onChange={handleChange} />
            <span></span>
            <label>Email</label>
          </div>
          <div>
            <input
              type="password"
              required
              name="password"
              onChange={handleChange}
            />
            <span></span>
            <label>Password</label>
          </div>
          {err && err}
          <button onClick={handleClick}>Register</button>
        </form>

        <div className="signin-link" style={{ border: 'none' }}>
          Already have account?{' '}
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
