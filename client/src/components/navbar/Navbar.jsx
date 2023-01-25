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
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>WeShare</span>
        </Link>
        <HomeOutlined />
        <DarkModeOutlined />
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
          <img
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="user"
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
