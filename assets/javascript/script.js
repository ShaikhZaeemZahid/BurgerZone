// navbar 
let hamburger = document.querySelector('.hamburger');

let nav2 = document.querySelector('.nav2');

hamburger.addEventListener('click', () => {
    nav2.classList.toggle('nav2-active');
    hamburger.classList.toggle('is-active');
});

// products
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


//cart
// let quantity1 = document.querySelector('.quantity1')



let price1 = document.querySelector('.price1').innerHTML
let quantity1 = document.querySelector('.quantity1').value
let price2 = document.querySelector('.price2').innerHTML
let quantity2 = document.querySelector('.quantity2').value
    let totalvalue = document.querySelector('.totalvalue')
    let total1 = parseInt(price1)*parseInt(quantity1)
    let total2 = parseInt(price2)*parseInt(quantity2)
 let total = total1 + total2

 totalvalue.innerHTML = total




