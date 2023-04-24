// Slider
const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },
  
  });



// // ACCOUNTS
// const wrapper = document.querySelector('.wrapper_accounts');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');
// const btnPopup = document.querySelector('.btnLogin-popup');
// const iconClose = document.querySelector('.icon-close');

// registerLink.addEventListener('click', ()=>{
//     wrapper.classList.add('active');
// });

// loginLink.addEventListener('click', ()=>{
//     wrapper.classList.remove('active');
// });

// btnPopup.addEventListener('click', ()=>{
//     wrapper.classList.add('active-popup');
// });

// iconClose.addEventListener('click', ()=>{
//     wrapper.classList.remove('active-popup');
// });

   
// var email = document.forms['form']['email'];
// var password = document.forms['form']['password'];

// var email_error = document.getElementById('email_error');
// var password_error = document.getElementById('password_error');

// function email_Verify() 
//     {
//         //to check if valid ang email
//         if (email.value === "admin")
//             email.style.border = "1px solid silver"
//             return false;
//     }
// function password_Verify() 
//     {
//         //to check if valid ang password
//         if (password.value === 12345)
//             password.style.border = "1px solid silver";
//             return false;
//     }
// function validated() 
//     {
//         //to check if valid ang password
//         if ((email.value != "admin") || (password.value != 12345))
//         {
//             email.style.backgroundColor = "red";
//             email.focus();


//             password.style.backgroundColor = "red";
//             password.focus();
//             return false;
//         }
//         else
//         {
//             location.reload();
//         }
//     }



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

