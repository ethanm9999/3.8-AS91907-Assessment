// cookie policy
let cookieModal = document.querySelector(".cookie-consent-modal")
let acceptCookieBtn = document.querySelector(".cookiebtn.accept")
let cancelCookieBtn = document.querySelector(".cookiebtn.cancel")

cancelCookieBtn.addEventListener("click", function(){
  cookieModal.classList.remove('active')
})
acceptCookieBtn.addEventListener("click", function(){
  cookieModal.classList.remove('active')
  localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
  let cookieAccepted = localStorage.getItem("cookieAccepted")
  if (cookieAccepted != "yes"){
    cookieModal.classList.add("active")
  }
}, 2000)
