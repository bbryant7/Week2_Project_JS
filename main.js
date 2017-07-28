// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  // Answer:
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].price);
    total += data[i].price;
    // let averagePrice = total/data.length;
    //total = total + data[i].price
  }
  // to see what you want --> consol.log('price', data[0].price); 'price' is just a label to help you see what you want to see
  let averagePrice = total / data.length;
  // let decimal = averagePrice.toFixed(2);
  console.log('The average price is '+ averagePrice.toFixed(2) + '.');
  return averagePrice;
}
// Why doesn't the function think 'averagePrice' is defined if I put it inside the loop.

// put return first so you know what you want to return. if you need to return average price, you need a variable. if you know you need to make an avaerage by dividing a total, you'll need to make a 'total' varial

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  let costBetween = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00)
      costBetween.push(data[i].title);
  }
  for (let i = 0; i < costBetween.length; i++) {
    console.log(costBetween[i]);
  }

  return costBetween;
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // let currency = data[i].currenty_code
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP")
      console.log(data[i].title + " costs " + data[i].price + " pounds.");
  }

}


// 4: Display a list of all items who are made of wood.
function question4() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.includes('wood'))
      console.log(data[i].title);
  }

}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8)
    console.log(data[i].title,data[i].materials);
    // for (let i = 0; i < materials.length; i++) {
    //   console.log('- '+materials[i])
    // }
}

}


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  let selfMade = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === 'i_did')
    selfMade.push(data[i].title);

  }
    console.log(selfMade.length +' items were made by their sellers.');
}
