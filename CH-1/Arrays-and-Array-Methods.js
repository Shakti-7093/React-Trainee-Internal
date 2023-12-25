const productsData = [
  { name: "Product 1", price: 250 },
  { name: "Product 2", price: 95 },
  { name: "Product 3", price: 100 },
  { name: "Product 4", price: 45 },
  { name: "Product 5", price: 105 },
  { name: "Product 6", price: 10 },
  { name: "Product 7", price: 90 },
  { name: "Product 8", price: 20 },
  { name: "Product 9", price: 260 },
  { name: "Product 10", price: 940 },
];

const mostExpensiveProducts = productsData.filter((data) => data.price > 50);

console.log("Most expensive products are:", mostExpensiveProducts);