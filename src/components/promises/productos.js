let products = [
  { id: "1", name: "Zapatilla 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ", category: "zapatillas", stock: 4 },
  { id: "2", name: "Camiseta 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ", category: "camisetas", stock: 3 },
  { id: "3", name: "Buzo 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ", category: "buzos", stock: 2 },
  { id: "4", name: "Zapatilla 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ", category: "zapatillas", stock: 1 },
  { id: "5", name: "Camiseta 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ", category: "camisetas", stock: 1 },
  { id: "6", name: "Buzo 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ", category: "buzos", stock: 1 },
  { id: "7", name: "Zapatilla 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ", category: "zapatillas", stock: 1 },
  { id: "8", name: "Camiseta 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ", category: "camisetas", stock: 1 },
  { id: "9", name: "Buzo 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ", category: "buzos", stock: 1 },
  { id: "10", name: "Zapatilla 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ", category: "zapatillas", stock: 1 },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
      if (products.length > 0) {
          setTimeout(() => {
              resolve(products);
          }, 2000);
      } else {
          reject('No hay productos');
      }
  });
};


export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    
    if (products.length > 0) {
      const product = products.find( p => p.id === id);
      
      setTimeout(() => {
        if(!product) {
          reject(`No se encuentra el productos con el id ${id}`)
        }
        resolve(product);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};