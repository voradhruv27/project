


//  login signup

const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


// image upload 
 
const bfile = document.querySelector("#bfile")
const sfile = document.querySelector("#sfile")
const afile = document.querySelector("#afile")
const rfile = document.querySelector("#rfile")
const aafile = document.querySelector("#aafile")

let bimgup = document.querySelector("#bimageupload")
let simgup = document.querySelector("#simageupload")
let aimgup = document.querySelector("#aimageupload")
let rimgup = document.querySelector("#rimageupload")
let aaimgup = document.querySelector("#aaimageupload")


bfile.addEventListener("change", function() {
  const reader = new FileReader()
        reader.addEventListener("load", () => {
          if(bimgup.src!==reader.result ) {
            bimgup.src = reader.result
          }
        })
    reader.readAsDataURL(this.files[0]);
})
sfile.addEventListener("change", function() {
  const reader = new FileReader()
        reader.addEventListener("load", () => {
          if(simgup.src!==reader.result ) {
            simgup.src = reader.result
          }
        })
    reader.readAsDataURL(this.files[0]);
})
afile.addEventListener("change", function() {
  const reader = new FileReader()
        reader.addEventListener("load", () => {
          if(aimgup.src!==reader.result ) {
            aimgup.src = reader.result
          }
        })
    reader.readAsDataURL(this.files[0]);
})
rfile.addEventListener("change", function() {
  const reader = new FileReader()
        reader.addEventListener("load", () => {
          if(rimgup.src!==reader.result ) {
            rimgup.src = reader.result
          }
        })
    reader.readAsDataURL(this.files[0]);
})
aafile.addEventListener("change", function() {
  const reader = new FileReader()
        reader.addEventListener("load", () => {
          if(aaimgup.src!==reader.result ) {
            aaimgup.src = reader.result
          }
        })
    reader.readAsDataURL(this.files[0]);
})





// Image upload end 

// login sign up text 


// let st1 =document.getElementsByClassName('section-title')
// let st2 =document.getElementsByClassName('section-title2')

// let sl = document.getElementsByClassName('switcher-login')
// let ss = document.getElementsByClassName('switcher-signup')



// sl.addEventListener('click', function() {

// st1.style.display = 'visible'
// st2.style.display = 'none'

// })

// ss.addEventListener('click', function() { 
//     st1.style.display = 'none'
//     st2.style.display = 'visible'
// })


// end login 





const swiper = new Swiper('.swiper', {
  // Optional parameters
autoplay: {
  delay: 2000,
  disableOnInteraction: true,
},

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});







 const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEveantListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
