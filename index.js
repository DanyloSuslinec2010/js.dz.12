const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

function countProps(obj) {
  return Object.keys(obj).length;
}

function findBestEmployee(employees) {
  let bestName = "";
  let maxTasks = 0;
  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestName = name;
    }
  }
  return bestName;
}

function countTotalSalary(employees) {
  let total = 0;
  for (const salary of Object.values(employees)) {
    total += salary;
  }
  return total;
}

function getAllPropValues(arr, prop) {
  const values = [];
  for (const obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }
  return values;
}

function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
}
