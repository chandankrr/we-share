import jwt from 'jsonwebtoken';
import { db } from '../connect.js';

export const getRandomUsers = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not logged in!');

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid');

    const q = `SELECT u.* FROM users u
    LEFT JOIN relationships r ON r.followedUserId = u.id 
    WHERE u.id != (?) AND r.followedUserId IS NULL LIMIT 2`;

    db.query(q, [userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
