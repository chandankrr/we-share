import jwt from 'jsonwebtoken';
import { db } from '../connect.js';

export const getFriends = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not logged in!');

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid');

    const q = `SELECT relationships.followedUserId, users.id, users.name, users.profilePic
    FROM relationships JOIN users ON relationships.followedUserId = users.id WHERE relationships.followerUserId = ?`;

    db.query(q, [userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
