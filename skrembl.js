// see läheb chrome konsooli
var intervalId = window.setInterval(function(){
  activeBox = document.getElementsByClassName("one_slovesnoe_chodo shown").item("").getElementsByClassName("bukovki_yakubovicha").item("").getElementsByClassName("one_bukovka one_bukovka_pole active")
    activeBox.item("").innerHTML = "\n" + activeBox.item("").getAttribute("data-val") + "\n\n"
}, 1000);

// uus kood selle tegmiseks, läheb samamoodi konsooli. Spämmi ei tea ja asi ants :)
params = new URLSearchParams(document.location.search.substring(1)); playgame($('.user_photo').attr('du'), params.get('igra'), $('#game_four_results').attr('id-game'), '.game4_inner')
