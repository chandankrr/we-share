import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import Neelu from '../../assets/neelu.jpg';
import Ravi from '../../assets/ravi.jpg';
import Shweta from '../../assets/shweta.jpg';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';
import './rightBar.scss';

const RightBar = () => {
  const { currentUser } = useContext(AuthContext);

  // eslint-disable-next-line no-unused-vars
  const { isLoading, error, data } = useQuery(['randomUser'], () =>
    makeRequest.get('/randomUser').then((res) => {
      return res.data;
    })
  );

  const {
    // eslint-disable-next-line no-unused-vars
    isLoading: _isLoading,
    // eslint-disable-next-line no-unused-vars
    error: _error,
    data: _data,
  } = useQuery(['friends'], () =>
    makeRequest.get('/friends').then((res) => {
      return res.data;
    })
  );

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestion for you</span>
          {data?.map((randUser) => (
            <div className="user" key={randUser.id}>
              <div className="userInfo">
                <img src={'/upload/' + randUser.profilePic} alt="" />
                <span>{randUser.name}</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
          ))}
        </div>
        <div className="item">
          <span>Latest Activities</span>
          {currentUser.username === 'chandankrr' ? (
            <div className="user">
              <div className="userInfo">
                <img src={Neelu} alt="" />
                <p>
                  <span>Neelu</span> changed her cover picture
                </p>
              </div>
              <span>4 hours ago</span>
            </div>
          ) : (
            <div className="user">
              <div className="userInfo">
                <img src={'/upload/' + currentUser.profilePic} alt="" />
                <p>
                  <span>{currentUser.name}</span> created his/her account
                </p>
              </div>
              <span>a min ago</span>
            </div>
          )}
          {currentUser.username === 'chandankrr' && (
            <div className="user">
              <div className="userInfo">
                <img src={Shweta} alt="" />
                <p>
                  <span>Shweta</span> added new post
                </p>
              </div>
              <span>2 days ago</span>
            </div>
          )}
          {currentUser.username === 'chandankrr' && (
            <div className="user">
              <div className="userInfo">
                <img src={Ravi} alt="" />
                <p>
                  <span>Ravi</span> updated his profile picture
                </p>
              </div>
              <span>6 days ago</span>
            </div>
          )}
        </div>
        <div className="item">
          <span>Friends</span>
          {_data?.map((friend) => (
            <div className="user" key={friend.id}>
              <div className="userInfo">
                <img src={'/upload/' + friend.profilePic} alt="" />
                <div className="online" />
                <span>{friend.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
