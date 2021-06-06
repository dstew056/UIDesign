	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "yogurt",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "bread",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "organic salmon",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "steak",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 15.00
	},
	{
		name: "organic granola",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 1.00
	},
	{
		name: "organic almonds",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 0.50
	},
	{
		name: "milk",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 4.70
	},
	{
		name: "organic eggs",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 3.00
	},
	{
		name: "peanut butter cup",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		price: 1.00
	},
	{
		name: "apples",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 6.00
	}
	
];
	
function getPrice(name){
	for (let i=0; i<products.length; i+=1) {
		if(products[i].name == name){
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD'}).format(products[i].price)
		}
	}
	return "0.00"
}


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods) {
	let product_names = [];
	prods.sort((a,b) => a.price - b.price);
	for (let i=0; i<prods.length; i+=1) {
		if (!(((document.getElementById("lactoseFree").checked==true) && (prods[i].lactoseFree == false)) ||
		((document.getElementById("nutFree").checked==true) && (prods[i].nutFree == false)) ||
		((document.getElementById("organic").checked==true) && (prods[i].organic == false)) ))
		{
			product_names.push(prods[i].name)
		}
	}

	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
