import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  return (
    <div className="register">
      <h1>WeShare</h1>
      <div className="center">
        <h1>Register</h1>
        <form>
          <div>
            <input type="text" required />
            <span></span>
            <label>Name</label>
          </div>
          <div>
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div>
            <input type="email" required />
            <span></span>
            <label>Email</label>
          </div>
          <div>
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <button>Register</button>
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
