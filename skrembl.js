// copy this to chrome console
var intervalId = window.setInterval(function(){
  activeBox = document.getElementsByClassName("one_slovesnoe_chodo shown").item("").getElementsByClassName("bukovki_yakubovicha").item("").getElementsByClassName("one_bukovka one_bukovka_pole active")
    activeBox.item("").innerHTML = "\n" + activeBox.item("").getAttribute("data-val") + "\n\n"
}, 1000);
