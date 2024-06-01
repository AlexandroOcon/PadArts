import { db } from './Database';

const ProductService = {
  getAllProducts: () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM Products;', [], (_, { rows }) => {
          const products = rows._array;
          resolve(products);
        });
      });
    });
  },

  addProduct: (name, price, description, image) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO Products (name, price, description, image) VALUES (?, ?, ?, ?);',
          [name, price, description, image],
          (_, { insertId }) => {
            resolve(insertId);
          }
        );
      });
    });
  },

  // Implementa otras funciones como updateProduct y deleteProduct según sea necesario
};

export default ProductService;
