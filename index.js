var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObj = {itemName: item, itemPrice: Math.floor(Math.random()*100)+1}
  cart.push(newObj)
  return(`${item} has been added to your cart.`)
}

function viewCart() {
  if(cart.length > 1) {
    var newArray2 = []
    for(let i = 0; i < cart.length - 1; i++) {
      newArray2.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    return(`In your cart, you have${newArray2}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`)
  } else if(cart.length > 0) {
    var newArray1 = []
    newArray1.push(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
    return newArray1
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  var totalPrice = 0
  for(let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    var newCart = []
    if(cart[i].itemName === item) {
      cart.splice(i,1)
    } else {
      newCart.push(cart[i].itemName)
    }
  }
