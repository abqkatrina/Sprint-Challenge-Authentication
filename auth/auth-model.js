const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
  get,
  insert,
  remove,
};

function get() {
  return db('posts');
}


function insert(post) {
  return db('posts')
    .insert(post)
    .then(user =>{
        return(user)
    });
}


function remove(id) {
  return db('posts')
    .where('id', id)
    .del();
}
