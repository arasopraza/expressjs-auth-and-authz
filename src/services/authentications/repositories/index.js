const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const ClientError = require('../../../exceptions/ClientError');
const NotFoundError = require('../../../exceptions/NotFoundError');
require('dotenv').config();

class AuthRepositories {
  constructor() {
    this._pool = new Pool();
  }

  async verifyUserCredential({ username, password }) {
    const query = {
      text: 'SELECT id, password FROM users WHERE username = $1',
      values: [username],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('User tidak ditemukan', 404);
    }

    const { id, password: hashedPassword } = result.rows[0];

    const match = await bcrypt.compare(password, hashedPassword);

    if (!match) {
      throw new ClientError('Kredensial yang Anda berikan salah', 400);
    }

    return id;
  }
}

module.exports = new AuthRepositories();

