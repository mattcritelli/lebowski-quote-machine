function showCharacter(character){
  if(character === "Walter"){
    return "walter.jpg"
  } else if(character === "Lebowski") {
    return "lebowski.jpg"
  } else if(character === "Donny") {
    return "donny.jpg"
  } else if(character === "The Jesus") {
    return "jesus.jpg"
  } else if(character === "The Stranger") {
    return "stranger.jpg"
  } else if(character === "Brandt") {
    return "brandt.jpg"
  } else if(character === "Jesus") {
    return "jesus.jpg"
  } else {
    return "dude.jpg"
  }
}



$(document).ready(function() {
  $("#get-quote button").on("click", function(){
    $.getJSON('http://lebowski.me/api/quotes/random.json',
      function(data){
        var quote = data.quote.lines[0].text;
        var character = data.quote.lines[0].character.name;
        $(".quote-text").html("<p>" + quote + "</p>");
        $(".quote-character").html("<p>-" + character + "</p>");
        console.log(character);
        var char = showCharacter(character);
        console.log("char?", char)
        $(".photo img").attr("src", `images/${char}`)

    });
  });
});
