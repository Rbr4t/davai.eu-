// ignoge erroreid
// vajuta vasakul poolel klassile ja see näitab õiget vastus

var intervalId = window.setInterval(function(){
  try{
  let data = document.getElementsByClassName("wglr_one wglr_one_left step-check")
  let eesti_keel = data.item(0).getAttribute("data-t")
  data.item(0).innerText = eesti_keel
  }
  finally{}
}, 200);
