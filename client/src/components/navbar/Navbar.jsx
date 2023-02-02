import {
  DarkModeOutlined,
  EmailOutlined,
  GridViewOutlined,
  HomeOutlined,
  NotificationsOutlined,
  PersonOutline,
  SearchOutlined,
  WbSunnyOutlined,
} from '@mui/icons-material';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';
import './navbar.scss';

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate;

  const logout = () => {
    localStorage.clear();
    window.location.reload();
    navigate('/register');
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>WeShare</span>
        </Link>
        <HomeOutlined />
        {darkMode ? (
          <WbSunnyOutlined onClick={toggle} />
        ) : (
          <DarkModeOutlined onClick={toggle} />
        )}
        <GridViewOutlined />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutline />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <Link to={`/profile/${currentUser.id}`}>
            <img src={'/upload/' + currentUser.profilePic} alt="" />
          </Link>
          <span>{currentUser.name}</span>
          <span
            onClick={logout}
            style={{
              backgroundColor: '#f0544f',
              padding: '5px',
              color: 'white',
              cursor: 'pointer',
              marginLeft: '20px',
            }}
          >
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
