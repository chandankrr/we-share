import './register.scss';

const Register = () => {
  return (
    <div className="register">
      <h1>WeShare</h1>
      <div class="center">
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
          <button>Login</button>
        </form>

        <div class="signup-link" style={{ border: 'none' }}>
          Already have account? <button>Signin</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
