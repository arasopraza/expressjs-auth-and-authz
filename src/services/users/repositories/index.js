const { Pool } = require('pg');
const bcrypt = require('bcrypt');
require('dotenv').config();

class UserRepositories {
  constructor() {
    this._pool = new Pool();
  }

  async createNewUser({ username, password, fullname }) {
    const id = `user-${Math.round(Math.random() * 100)}`;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = {
      text: 'INSERT INTO users(id, username, password, fullname) VALUES($1, $2, $3, $4) RETURNING id, username, fullname',
      values: [id, username, hashedPassword, fullname],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }

  async getAllUsers() {
    const query = {
      text: 'SELECT id, username, fullname, password FROM users',
    };

    const result = await this._pool.query(query);

    return result.rows;
  }

  async getUserByUsername(username) {
    const query = {
      text: 'SELECT username FROM users WHERE username = $1',
      values: [username],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }
}

module.exports = new UserRepositories();

