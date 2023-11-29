/*
  
  ASSIGNMENT 1

  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

*/

function isAnagram(str1, str2) {
  let charArray1 = str1.split("");
  let charArray2 = str2.split("");

  charArray1.sort();
  charArray2.sort();

  const string1 = charArray1.join("");
  const string2 = charArray2.join("");

  return string1 === string2 ? true : false;
}

// console.log(isAnagram("listen", "silent"));

/*
  ASSIGNMENT 2

  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let totalCategory = {};

  transactions.forEach((transaction) => {
    let category = transaction.category; //clothes
    let price = transaction.price; // 50

    if (category in totalCategory) {
      //if category exist in total category
      totalCategory[category] += price;
    } else {
      //if category does not exist in total category
      totalCategory[category] = price;
    }
  });

  //convert total category object keys into array
  //and using map func on them to convert it into array of objects
  let result = Object.keys(totalCategory).map(function (category) {
    return { [category]: totalCategory[category] };
  });

  return result;
}

var transactions = [
  {
    itemName: "Shirt",
    category: "Clothing",
    price: 30,
    timestamp: "2023-11-02",
  },
  {
    itemName: "Shoes",
    category: "Clothing",
    price: 50,
    timestamp: "2023-11-03",
  },
  {
    itemName: "Groceries",
    category: "Food",
    price: 100,
    timestamp: "2023-11-04",
  },
  {
    itemName: "Phone",
    category: "Electronics",
    price: 500,
    timestamp: "2023-11-05",
  },
  { itemName: "Hat", category: "Clothing", price: 15, timestamp: "2023-11-06" },
];

// const result = calculateTotalSpentByCategory(transactions);
// console.log(result);

//Pushing github repo using github CLI