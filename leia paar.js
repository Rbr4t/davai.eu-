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

// ülemine ei tööta proovi seda: tuleb liikuda lihtsalt järgmise teema juurde
params = new URLSearchParams(document.location.search.substring(1)); playgame($('.user_photo').attr('du'), params.get('igra'), $('#game_two_results').attr('id-game'), '.game2_inner')
