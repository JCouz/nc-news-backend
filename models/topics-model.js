const db = require('../db/connection.js');

// exports.fetchTopics = () => {
//   return db.query('SELECT * FROM topics;').then((res) => {
//     return res.rows;
//   });
// };

exports.fetchTopics = async () => {
  const result = await db.query('SELECT * FROM topics;');
  return result.rows;
};
