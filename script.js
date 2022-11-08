const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c8ec64fff9msh3129d458e305ddcp19d74ajsnf033030165c6",
    "X-RapidAPI-Host": "game-prices.p.rapidapi.com",
  },
};

var submitButtonEl = $("#submit");
var region = $("#region");
var game_name = $("#game_name");

submitButtonEl.on("click", function () {
  var regionVal = region.find(":selected").val();
  var gameVal = game_name.val();
  console.log(regionVal, gameVal);
  if (!regionVal || !gameVal) return;
  $(this).addClass("loading");
  $("li").css("color", "white");
  return fetch(
    `https://game-prices.p.rapidapi.com/games?title=${gameVal}&region=${regionVal}&offset=0&limit=50`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      var games = response.games.filter((g) => g.name);
      //loop through the data and append to the UL
      for (var i = 0; i < games.length; i++) {
        var gameData = games[i];
        $("ul")
          .append(`<li class="nes-container list-unstyled flex-grow-1 is-dark with-title">
            <p class="title">${gameData.name}</p>
            <p>Release date--${gameData.releaseDate || "Unknown"}</p>
            <p>Price - ${gameData.currentLowestPrice} ${gameData.currency}</p>
            <svg width="3rem" height="3rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
</svg>

          </li>`);
      }
    })
    .catch((err) => console.error(err))
    .finally(() => {
      $(this).removeClass("loading");
    });
});
