// // ACCOUNTS
const wrapper = document.querySelector('.wrapper_accounts');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

   
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

function email_Verify() 
    {
        //to check if valid ang email
        if (email.value === "admin")
            email.style.border = "1px solid silver"
            return false;
    }
function password_Verify() 
    {
        //to check if valid ang password
        if (password.value === 12345)
            password.style.border = "1px solid silver";
            return false;
    }
function validated() 
    {
        //to check if valid ang password
        if ((email.value != "admin") || (password.value != 12345))
        {
            email.style.backgroundColor = "red";
            email.focus();


            password.style.backgroundColor = "red";
            password.focus();
            return false;
        }
        else
        {
            location.reload();
        }
    }



//copy meanu for mobile
function copyMenu()
    {
        // copy inside .dpt-cat to .departments
        var dptCategory = document.querySelector('.dpt-cat');
        var dptPlace = document.querySelector('.departments');
        dptPlace.innerHTML = dptCategory.innerHTML;

        // Copt inside.nav to nav
        var mainNav = document.querySelector('.header-nav nav');
        var navPlace = document.querySelector('.off-canvas nav');
        navPlace.innerHTML = mainNav.innerHTML;

        // copy .header-top .wrapper to .thetop-nav
        var topNav = document.querySelector('.header-top .wrapper');
        var topPlace = document.querySelector('.off-canvas .thetop-nav');
        topPlace.innerHTML = topNav.innerHTML;
    }
copyMenu();

// show mobile menu
const menuButton = document.querySelector('.trigger'),
      closestButton = document.querySelector('.t-close'),
      addclass = document.querySelector('.site');

menuButton.addEventListener('click', function(){
    addclass.classList.toggle('showmenu')
})
closestButton.addEventListener('click', function(){
    addclass.classList.remove('showmenu')
})

// Show sub menu on mobile
const subMenu = document.querySelectorAll('.has-child .icon-small')
subMenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    subMenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand'): null);
    if(this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}

//SLIDER
// Slider
// const swiper = new Swiper('.swiper', {
//     loop: true,

//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//   });

// // Show Search
// const searchButton = document.querySelector('.t-search'),
//       tClose = document.querySelector('.search-close'),
//       showClass = document.querySelector('.site');
// searchButton.addEventListener('click', function(){
//     showClass.classList.toggle('showsearch')
// })
// tClose.addEventListener('click', function(){
//     showClass.classList.remove('showsearch')
// })

// // Show dpt menu
// const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
//       dptClass = document.querySelector('.site');
// dptButton.addEventListener('click', function(){
//     dptClass.classList.toggle('showdpt')
// })


// ADD TO CART
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.cart-total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    { id: 1, name: 'Fried Chicken', image: '1.jpg', price: 575}, { id: 2, name: 'Beef Kare-kare', image: '2.jpg', price: 919}, { id: 3, name: 'Pancit Canton', image: '3.jpg', price: 185},
    { id: 4, name: 'Sizzling Tofu', image: '4.jpg', price: 884}, { id: 5, name: 'Crispy Pata', image: '5.jpg', price: 884}, { id: 6, name: 'Sinigang na Bangus', image: '6.jpg', price: 515},
    { id: 7, name: 'Fresh Lumpiang Ubod', image: '7.jpg', price: 137}, { id: 8, name: 'Chicken Malai Tikka', image: '8.jpg', price: 505}, { id: 9, name: 'Paneer Tikka', image: '9.jpg', price: 505},
    { id: 10, name: 'Aloo Jeera', image: '10.jpg', price: 350}, { id: 11, name: 'Palak Paneer', image: '11.jpg', price: 485}, { id: 12, name: 'Tandoori Broccoli', image: '12.jpg', price: 415},
    { id: 13, name: 'Mutton Biryani', image: '13.jpg', price: 650}, { id: 14, name: 'Mutton Galouti', image: '14.jpg', price: 475}, { id: 15, name: 'Spaghetti Acciugata', image: '15.jpg', price: 570},
    { id: 16, name: 'Spaghetti Pomodoro', image: '16.jpg', price: 490}, { id: 17, name: 'Spaghetti Aglio Olio', image: '17.jpg', price: 490}, { id: 18, name: 'Penne Quattro Formaggi', image: '18.jpg', price: 590},
    { id: 19, name: 'Quattro Formaggi', image: '19.jpg', price: 560}, { id: 20, name: 'Quattro Stagioni', image: '20.jpg', price: 540}, { id: 21, name: 'Pizza Tonno', image: '21.jpg', price: 530},
    { id: 22, name: 'Sopa de Tortilla', image: '22.jpg', price: 175}, { id: 23, name: 'Chipotle Buffalo Wings', image: '23.jpg', price: 395}, { id: 24, name: 'Beef Taquitos', image: '24.jpg', price: 195},
    { id: 25, name: 'Chicharron con Salsa', image: '25.jpg', price: 260}, { id: 26, name: 'Mexican Pork Sisig', image: '26.jpg', price: 490}, { id: 27, name: 'Fajitas', image: '27.jpg', price: 695},
    { id: 28, name: 'Agave Taco Salad', image: '28.jpg', price: 455}, { id: 29, name: 'House Margarita', image: '29.jpg', price: 169}, { id: 30, name: 'Strawberry Margarita', image: '30.jpg', price: 189},
    { id: 31, name: 'Bacardi Mojito', image: '31.jpg', price: 199}, { id: 32, name: 'Pineaple-Mango', image: '32.jpg', price: 190}, { id: 33, name: 'Italian Soda', image: '33.jpg', price: 190},
    { id: 34, name: 'Velvet Latte', image: '34.jpg', price:  270}, { id: 35, name: 'Birra Peroni', image: '35.jpg', price: 190}, { id: 36, name: 'Hugo', image: '36.jpg', price: 220},
    { id: 37, name: 'Shyama Tulsi', image: '37.jpg', price: 210}, { id: 38, name: 'Kashmiri Kahwa', image: '38.jpg', price: 210}, { id: 39, name: 'Lively Lemon', image: '39.jpg', price: 90},
    { id: 40, name: 'Red Ocean', image: '40.jpg', price: 210}, { id: 41, name: 'Rock Melon Juice', image: '41.jpg', price: 110}, { id: 42, name: 'Sago at Gulaman', image: '42.jpg', price: 189},
    { id: 43, name: 'Melon SHake', image: '43.jpg', price: 150}, { id: 44, name: 'Corn Shake', image: '44.jpg', price: 150}, { id: 45, name: 'Halo-Halo', image: '45.jpg', price: 176}







];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title" style="height:50px; font-weight:bold;">${value.name}</div>
            <div class="price">Php ${value.price.toLocaleString()}.00</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerHTML = `<p class="TPrice">Total Price: ${totalPrice.toLocaleString()}</p>`;
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    console.log(key, quantity);
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
