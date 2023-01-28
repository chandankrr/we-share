import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './login.scss';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate('/');
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login">
      <h1>WeShare</h1>
      <div className="center">
        <h1>Login</h1>
        <form>
          <div>
            <input type="text" name="username" onChange={handleChange} />
            <span></span>
            <label>Username</label>
          </div>
          <div>
            <input type="password" name="password" onChange={handleChange} />
            <span></span>
            <label>Password</label>
          </div>
          <div className="password" style={{ border: 'none' }}>
            Forgot Password?
          </div>
          {err && err}
          <button onClick={handleLogin}>Login</button>
        </form>

        <div className="signup-link" style={{ border: 'none' }}>
          Don't have account?{' '}
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
