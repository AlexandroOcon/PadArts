// Database.js
import SQLite from 'react-native-sqlite-storage';

// Abrir la base de datos o crearla si no existe
const db = SQLite.openDatabase(
  { name: 'padart.db', location: 'default' },
  () => { console.log('Database opened') },
  error => { console.log(error) }
);

// Crear la tabla de productos si no existe
db.transaction(tx => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      category TEXT,
      price REAL,
      image TEXT
    );`,
    [],
    () => { console.log('Table created successfully') },
    error => { console.log(error) }
  );
});

// Función para insertar un nuevo producto
export const insertProduct = (name, category, price, image) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO products (name, category, price, image) VALUES (?, ?, ?, ?)',
      [name, category, price, image],
      (tx, results) => { console.log('Product inserted successfully') },
      error => { console.log(error) }
    );
  });
};

// Función para obtener todos los productos
export const getProducts = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM products',
      [],
      (tx, results) => {
        let products = [];
        for (let i = 0; i < results.rows.length; i++) {
          products.push(results.rows.item(i));
        }
        callback(products);
      },
      error => { console.log(error) }
    );
  });
};
