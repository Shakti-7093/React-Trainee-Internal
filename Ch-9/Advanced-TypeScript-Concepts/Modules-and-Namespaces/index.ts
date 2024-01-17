import { UserProfile } from './userProfile';
import { Product } from './product';

// Sample usage
const user: UserProfile = {
  userId: 1,
  username: 'john_doe',
  email: 'john@example.com',
};

const product: Product = {
  productId: 101,
  productName: 'Sample Product',
  price: 19.99,
};

console.log('User Profile:', user);
console.log('Product:', product);