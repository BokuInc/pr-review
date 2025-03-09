// Function with missing variable declaration
function calculateSum(items) {
  let total = 0;
  for (i = 0; i < items.length; i++) {  // Missing 'let' or 'var'
    total += items[i];
  }
  
  return totl;  // Typo in variable name
}

// Potential SQL injection vulnerability
function queryUser(userId) {
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  return db.query(query);
}

// Unused variable and inefficient loop
function processData(data) {
  const unused = 'This variable is never used';
  
  // Inefficient array manipulation
  for (let i = 0; i < data.length; i++) {
    data.push(data[i]); // Will cause infinite loop
  }
  
  return data;
}
