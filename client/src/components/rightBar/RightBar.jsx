import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import './rightBar.scss';

const RightBar = () => {
  const { isLoading, error, data } = useQuery(['randomUser'], () =>
    makeRequest.get('/randomUser').then((res) => {
      return res.data;
    })
  );

  const {
    isLoading: _isLoading,
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
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
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
