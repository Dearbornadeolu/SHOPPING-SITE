const productEl = document.querySelector('.content-for-first-column-menu')
const cartItemEl = document.querySelector('.checkout-cards')
const outputSubtotal = document.querySelector('.subtotal')
const marketBtn = document.querySelector('#to-cart-items')
if ((localStorage.getItem("userFname") === null) || (localStorage.getItem("userLname") === null)) {
    alert('pls sign up or login')
    document.location.href = 'login.html'
}else{
    document.querySelector('#UserOutput').textContent = `hi,  ${localStorage.getItem("userFname")}  ${localStorage.getItem("userLname")}`
}
function renderProducts() {
    product.forEach((product) => {
        productEl.innerHTML += `
        <div class="market-cards">
            <img src="${product.imgSrc}" alt="${product.name}" class="market-card-img">
            <h1 class="marketplace-mini-container-header">${product.name}</h1>
            <P class="marketplace-mini-container-content">$ ${product.price}</P>
            <button class="add-to-list" id="add-to-list" onClick= "addToCart(${product.id})">ADD TO CART</button>
       </div>
        `;
    })
}
renderProducts()
//add to cart
//let cart = [] 
let cart = JSON.parse(localStorage.getItem("CART") )|| []
updateCart()
function addToCart(id) {
    //check if product already existed on checkout
    if(cart.some((item)=> item.id === id)){
        changeNumberOfUnit('plus',id)
    } else {
        const item = product.find((products) => products.id === id)
        cart.push({
            ...item,
            numberOfUnit : 1
        })
    }
    updateCart()
}
//update cart
function updateCart() {
    renderCartItems()
	renderSubTotal()
	//save cart to local storage
	localStorage.setItem("CART",JSON.stringify(cart))
}
function  renderCartItems() {
    cartItemEl.innerHTML = ' ' //to avoid repetition of items
    cart.forEach((item =>{
        cartItemEl.innerHTML += `
        <div class="checkout-card-flex">
		  <img src="${item.imgSrc}" alt="${item.name}">
                        <div>
                            <h4>${item.name}</h4>
                    <small>$ </small>${item.price}
					<div>${item.inStock} items left</div>
                    <div class="cart-market-checkout-column-mini">
                        <button onClick="changeNumberOfUnit('minus',${item.id} )">-</button>
                        <div class="cart-market-checkout-column-mini-number">${item.numberOfUnit}</div>
                        <button onClick="changeNumberOfUnit('plus',${item.id} )">+</button>
                        </div>
						<button class="last-btn"  onClick="removeItemFromCart(${item.id})">remove</button>        
                    </div> 
        </div>
        `
    }))
}	
//button control {increase and decrease}
function changeNumberOfUnit(action, id) {
	cart = cart.map((item)=>{
		let numberOfUnit = item.numberOfUnit;
		if(item.id === id){
			if (action === 'minus' && numberOfUnit > 1) {
				numberOfUnit--
			}else if (action === 'plus' && numberOfUnit < item.inStock) {
				numberOfUnit++
			}
		}
		return {
			...item,
			numberOfUnit,
		}
	})
	updateCart()
}
function renderSubTotal(){
	let totalPrice = 0 
	let totalItem = 0
	cart.forEach((item =>{
		totalPrice += item.price * item.numberOfUnit
		totalItem = item.numberOfUnit
		outputSubtotal.innerHTML = `
		subtotal (${totalItem}items): $ ${totalPrice.toFixed(2)}
		`
		marketBtn.innerHTML = totalItem
	}))
}
//remove cart
function removeItemFromCart(id) {
	cart = cart.filter((item) => item.id !== id);
	outputSubtotal.innerHTML = `
		subtotal (0items): $ 0
		`
	updateCart()
}
//seacrch
function btnInput(){
    document.querySelector('#marketplace-search-input').style.display = 'initial'
}