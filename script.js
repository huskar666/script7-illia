const user = {
    name: 'ілля',
    age: 14,
    hobby: 'спорт',
    premium: true
  };
  
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
  
  const keys = Object.keys(user);
  for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
  }
  
  function countProps(obj) {
    return Object.keys(obj).length;
  }
  console.log(countProps(user))


  const employees = {
    'maksim': 8,
    'papich': 2,
    'rostik': 12,
    'ivan': 3
  }
  
  function findBestEmployee(employees) {                                                
        const numbers = Object.values(employees).filter(value => typeof value === 'number')
        return Math.max(...numbers)
  } 
  console.log(findBestEmployee(employees))


  const employees1 = {
    'maksim': 24243,
    'papich': 332,
    'rostik': 993,
    'ivan': 622
  }

  function countTotalSalary(employees1) {
    return Object.values(employees1).reduce((total, salary) => total + salary, 0) 
  }
console.log(countTotalSalary(employees1))

const users = [
    { name: 'maksim', age: 25 },
    { name: 'rostislav', age: 30 },
    { name: 'illia', age: 28 }
  ];

function getAllPropValues(arr, prop) {
    return arr.map(item => item[prop]);
  }
  const names = getAllPropValues(users, 'name');
console.log(names);

const allProducts = [
    { name: 'мишка', price: 500, quantity: 10 },
    { name: 'клавіатура', price: 700, quantity: 5 },
    { name: 'монітор', price: 3000, quantity: 2 }
  ];

function calculateTotalPrice(allProducts, productName) {
    const product = allProducts.find(item => item.name === productName)
    if (product) {
        return product.price * product.quantity;
    }
    else {
        return 0;
    }
}
const totalMousePrice = calculateTotalPrice(allProducts, 'мишка');
console.log(totalMousePrice);
const totalKeyboardPrice = calculateTotalPrice(allProducts, 'клавіатура');
console.log(totalKeyboardPrice);

const totalMonitorPrice = calculateTotalPrice(allProducts, 'монітор');
console.log(totalMonitorPrice);
