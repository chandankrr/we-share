import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';
import './stories.scss';

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  // eslint-disable-next-line no-unused-vars
  const { isLoading, error, data } = useQuery(['stories'], () =>
    makeRequest.get('/stories').then((res) => {
      return res.data;
    })
  );

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.story} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {data?.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.story} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
