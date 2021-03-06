const express = require('express');
const { getTopics } = require('./controllers/topics-controller.js');
const {
  getArticle,
  patchArticle,
  getArticles,
  getArticleComments,
  postArticleComments,
  deleteComment,
  patchComment,
} = require('./controllers/articles-controllers');
const { getUsers } = require('./controllers/users-controller');
const {
  customError,
  trigger404,
  trigger500,
} = require('./controllers/error-handling.js');
const { getApi } = require('./controllers/api-controllers.js');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());

app.get('/api', getApi);

app.get('/api/topics', getTopics);

app.get('/api/articles', getArticles);

app.get('/api/users', getUsers);

app.get('/api/articles/:article_id', getArticle);

app.patch('/api/articles/:article_id', patchArticle);

app.patch('/api/comments/:comment_id', patchComment);

app.get('/api/articles/:article_id/comments', getArticleComments);

app.post('/api/articles/:article_id/comments', postArticleComments);

app.delete('/api/comments/:comment_id', deleteComment);

app.all('/*', trigger404);
app.use(customError);
app.use(trigger500);

module.exports = app;
