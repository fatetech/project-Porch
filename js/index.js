let loadText = document.getElementsByClassName('load')[0].getElementsByTagName('h1')[0];
let loaded = document.getElementsByClassName('load')[0];
let load = 0;

let int = setInterval(loading, 30)

 function loading (){
    load++;
    if(load > 99){
        clearInterval(int)
    }

    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
     loaded.style.opacity = `${scale(load, 0, 100, 100, 0)}%`;

     function opacity (){
        loaded.style.display = 'none'
        loaded.style.transition = 'display 0.8s ease-in'
     }

     setTimeout(opacity, 4000)
}

const scale = (num, in_min, in_max, out_min, out_max) =>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


// scroll
let pochAmount = document.getElementsByClassName('main-content-footer')[0].getElementsByTagName('h1')[0];
let pochInt = 0;

function scrollDownOnce(){
    // console.log('Scroll')
    pochInt++;
    pochAmount.innerHTML= `${pochInt}$ Billons`
    if(pochInt > 9){
        window.removeEventListener("scroll", scrollDownOnce)
    }
}

window.addEventListener('scroll',  scrollDownOnce)

// function to the top 
window.addEventListener('load', function() {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  });

// function scrollToTop(){
//     window.scrollTo(0,0)

// }
// window.onload = scrollToTop;

// reload
// let logo = document.getElementsByClassName('logo')[0].getElementsByTagName('img')[0];

// function reLoadPage(){
//     location.reload();
//     window.onload = scrollToTop;
// }

// logo.onclick = reLoadPage;


/* Hambugger */

const toggleBtn = document.getElementById('Bar');
const buggers = document.getElementsByClassName('bugers')
const toggleBtn2 = document.getElementById('Cancel');
const navDropDown = document.getElementsByClassName('nav')[0];
const Hambugger = document.getElementsByClassName('hamguger')[0];
// document.getElementById
// \

const togleOn = Hambugger.addEventListener('click', function(){
    navDropDown.classList.toggle('active')
    // for(i = 0; i < buggers.length; i++){
    //     buggers[i].classList.toggle('show-up')
    // }
    console.log("go")
})


// fix Navbar overflow

const navLink = document.getElementsByClassName('Nav-links');

for(i = 0; i < navLink.length; i++){
    // console.log(navLink[i])
    navLink[i].addEventListener('click', function(event){
        console.log(event)
        navDropDown.classList.remove('active')

    })
}


console.log(navLink)

// scroll to the top icon
const ArowBtn = document.getElementsByClassName('arow-up')[0];



ArowBtn.onclick = ()=>{
    window.scrollTo(0,0)
    ArowBtn.style.display = "none"
}



window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
      ArowBtn.classList.add('hidden');
      ArowBtn.style.display = "none"
    } else {
      ArowBtn.classList.remove('hidden');
      ArowBtn.style.display = "Block"
    }
  });


//   Change Navbar Background color

var prevScrollPos = window.scrollY;
var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  var currentScrollPos = window.scrollY;

  if (prevScrollPos >= currentScrollPos) {
    // Scrolling up
    navbar.classList.remove('navbar-scroll');
  } else {
    // Scrolling down
    navbar.classList.add('navbar-scroll');
  }

  prevScrollPos = currentScrollPos;
});


