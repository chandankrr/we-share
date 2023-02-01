import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  MoreHoriz,
  ShareOutlined,
  TextsmsOutlined,
} from '@mui/icons-material';
import moment from 'moment';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import './post.scss';

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  //TEMPORARY
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHoriz />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={'/upload/' + post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? (
              <FavoriteOutlined style={{ color: '#f0544f' }} />
            ) : (
              <FavoriteBorderOutlined />
            )}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlined />
            See Comments
          </div>
          <div className="item">
            <ShareOutlined />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
