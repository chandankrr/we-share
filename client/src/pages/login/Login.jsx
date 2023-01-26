import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './login.scss';

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <h1>WeShare</h1>
      <div class="center">
        <h1>Login</h1>
        <form>
          <div>
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div>
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div class="password" style={{ border: 'none' }}>
            Forgot Password?
          </div>
          <button onClick={handleLogin}>Login</button>
        </form>

        <div class="signup-link" style={{ border: 'none' }}>
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
