const { Pool } = require('pg');
require('dotenv').config();

class StoreRepositories {
  constructor() {
    this._pool = new Pool();
  }

  async createStore({ name, address, rating, owner }) {
    const id = `store-${Math.round(Math.random() * 100)}`;
    const query = {
      text: 'INSERT INTO stores(id, name, address, rating, owner) VALUES($1, $2, $3, $4, $5) RETURNING id, name, address, rating, owner',
      values: [id, name, address, rating, owner],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }

  async editStore({ id, name, address }) {
    const query = {
      text: 'UPDATE stores SET name = $1, address = $2, rating = $3, owner = $4 WHERE id = $5 RETURNING id, name, address, rating, owner',
      values: [name, address, rating, owner, id],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }
}

module.exports = new StoreRepositories();