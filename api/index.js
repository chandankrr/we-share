import express from 'express';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/comments.js';
import likeRoutes from './routes/likes.js';
import postRoutes from './routes/posts.js';
import commentRoutes from './routes/users.js';
const app = express();

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);

app.listen(8800, () => {
  console.log('API working');
});
