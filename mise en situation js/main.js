// =========================================================
// STEP 1: DATA (we give this to students)
const foodsContainer=document.getElementById('foodsContainer');
const cartContainer=document.getElementById('cartContainer');
// =========================================================
const foods = [
    { id: 1, name: "Pizza Margherita", price: 45 },
    { id: 2, name: "Tacos Poulet", price: 30 },
    { id: 3, name: "Burger Classic", price: 38 },
    { id: 4, name: "Salade César", price: 25 },
    { id: 5, name: "Pasta Carbonara", price: 42 },
    { id: 6, name: "Fish & Chips", price: 50 },
];

// =========================================================
// STEP 2: SELECT DOM ELEMENTS (students must do it)
// =========================================================
// TODO: select

// - foodsContainer
// - cartContainer
// - subtotalDisplay
// - vatDisplay
// - totalDisplay
// - vatInput
//
// EXAMPLE:
// const foodsContainer = document.getElementById('foodsContainer');

// =========================================================
// STEP 3: CART STRUCTURE (nothing to do here !)
// =========================================================
// We keep the cart in memory as an array
// Each item: { id, name, price, quantity }
let cart = [];

// =========================================================
// STEP 4: RENDER FOODS
// =========================================================
function renderFoods() {
    // TODO:
    foods.forEach(food=>{
    const div=document.createElement('div');
    div.innerHTML=`${food.name} ${food.price}`;
    div.classList.add('food-item');
    div.addEventListener('click',()=>{
        addToCart(div.innerHTML)   
    })
    foodsContainer.appendChild(div);
    
    
})
    // 1. clear foodsContainer
    // 2. loop over foods array
    // 3. for each food: create a div.food-item
    // 4. set innerHTML with name + price
    // 5. add click listener → addToCart(food)
    // 6. append to foodsContainer
}

// =========================================================
// STEP 5: ADD TO CART
// =========================================================
function addToCart(food) {
    // TODO:
    // 1. check if food already in cart (use find)
    // 2. if yes → increase quantity
    // 3. if no → push new object with quantity = 1
    // 4. call renderCart()
    // 5. call updateTotals()  
   cart.push(food);   
   console.log(cart);
   
   cart.forEach(e=>{
    
})
cartContainer.innerHTML=cart;
    
    
    
    
        
   
    
}

// =========================================================
// STEP 6: RENDER CART
// =========================================================
function renderCart() {
    // TODO:
    // 1. clear cartContainer
    // 2. if cart empty → show "Your cart is empty"
    // 3. else → loop over cart
    //    - create cart item div
    //    - show name, price, qty, line total
    // 4. append to cartContainer
}

// =========================================================
// STEP 7: UPDATE TOTALS
// =========================================================
function updateTotals() {
    // TODO:
    // 1. calculate subtotal = sum(price * quantity)
    // 2. get VAT rate from input
    // 3. VAT = subtotal * rate
    // 4. total = subtotal + VAT
    // 5. update DOM
}

// =========================================================
// STEP 8: VAT CHANGE LISTENER
// =========================================================
// TODO:
// - add event listener on vatInput → call updateTotals()

// =========================================================
// STEP 9: INIT
// =========================================================
// TODO:
// - call renderFoods()
renderFoods();
// - call updateTotals()










// =========================================================
// BONUS : Remise par Coupon (Coupon Discount System) 
// =========================================================
//
// On a un tableau de coupons côté JS.
// Chaque coupon contient trois informations :
// - code	: le code du coupon (texte) "YOUCODE10"
// - type	: le type de remise (percent ou fixed)
// - value	: la valeur de la remise (nombre)	10 ou 5
// Lire le code saisi par l’utilisateur dans un champ texte et vérifier si ce code existe dans le tableau (si oui, appliquer la remise correspondante)