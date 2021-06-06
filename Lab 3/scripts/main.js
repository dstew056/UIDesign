
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(tabName) {

	populateListProductChoices('displayProduct');

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	document.getElementById(tabName).style.display = "block";

}



// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2) {
    //var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(getPrice(productName) + "\xa0\xa0\xa0\xa0\xa0\xa0" + productName));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'}).format(getTotalPrice(chosenProducts))))
	
	openInfo("Cart");

	//document.getElementsByClassName("cart").display = "block";
	// document.getElementById("Cart").style.display = "block";
	// console.log("waesdtgsr");
	document.getElementById("CartPage").style.display = "block";
}

function goToPayment(){
	openInfo("Payment");
	document.getElementById("PaymentPage").style.display = "block";
	document.getElementById("Delivery").style.display = "block";
}

function backToStart(){
	openInfo("Client")
	document.getElementById("Products").style.display = "block";
	document.getElementById("main").style.display = "block";
}

function placeOrder(){
	openInfo("thankYou")
}
function changeDeliveryPage(option){
	options = ["Shipping","PickUp"];

	for(i=0;i<options.length;i++){
		document.getElementById(options[i]).style.display = "none";
	}

	document.getElementById(option).style.display = "block";
}

populateListProductChoices("displayProduct");