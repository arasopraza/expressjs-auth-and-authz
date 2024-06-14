exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('stores', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    address: {
      type: 'TEXT',
      notNull: true,
    },
    rating: {
      type: 'INTEGER',
      notNull: true,
    },
    owner: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('stores');
};