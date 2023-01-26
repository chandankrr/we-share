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
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';
import './navbar.scss';

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

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
          <img src={currentUser.profilePic} alt="user" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
